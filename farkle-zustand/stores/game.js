import { create } from 'zustand'
import useDiceStore from './dice'
import { evaluateDice, evaluateDiceSet } from '../utils/scoreUtils'


const useGameStore = create((set, get) => ({
  turns: [],
  currentTurn: {
    rolls: [],
    heldDice: [],
    points: 0,
    farkled: false
  },
  totalPoints: 0,
  status: 'preroll',
  actions: {
    setStatus: (newStatus) => set({
      status: newStatus
    }),
    roll: () => {
      //get dice from dice store
      const dice = useDiceStore.getState().dice
      
      //filter for held dice  
      const heldDice = dice.filter(die => die.held === true)
      
      //if there are any held dice then toggle lock flag
      heldDice.forEach((heldDie) => {
        useDiceStore.getState().actions.lockDie(heldDie.id)
      })

      //add empty item to heldDice for next selections
      set(state => ({
        currentTurn: {
          ...state.currentTurn,
          heldDice:
            [
              ...state.currentTurn.heldDice,
              []
            ]
        }
      }))

      const state = get()
      if (state.status === 'valid' || state.status === 'preroll') {
        //if all dice are held then reset all dice
        if(useDiceStore.getState().dice.filter(die => die.held).length === 6) {
          console.log('HOT DICE!')
          useDiceStore.getState().actions.resetDice()
        }

        //Roll dice
        useDiceStore.getState().actions.rollDice()

        //Get rolled dice 
        const diceOnBoard = useDiceStore.getState().dice.filter(die => die.onBoard)

        //Get dice values
        const diceValues = diceOnBoard.map(die => die.value)

        //Evaluate dice
        const result = evaluateDice(diceValues)

        //Add roll to current turn
        set(state => ({
          currentTurn: {
            ...state.currentTurn,
            rolls: [
              ...state.currentTurn.rolls,
              diceValues
            ]
          }
        }))


        if (result.scoringDice === 0) {
          //TODO: since farkle is in current term maybe remove from status
          set({ status: 'farkle' })
          set(state => ({
            currentTurn: {
              ...state.currentTurn,
              farkled: true
            }
          }))
        } else {
          set({ status: 'invalid' })
        }
      }
    },
    holdDie: (id) => {
      //Hold die in dice store
      useDiceStore.getState().actions.toggleHoldDie(id)

      //Get held dice for current roll (excludes locked dice)
      const heldDice = useDiceStore.getState().dice.filter(die => die.held === true && die.locked === false)

      //Get held dice values
      const diceValues = heldDice.map(die => die.value)

      //Evaluate held dice
      const result = evaluateDice(diceValues)
      if (result.scoringDice < heldDice.length) {
        set({ status: 'invalid' })
      } else {
        set({ status: 'valid' })
      }

      //Get number of selections in current turn
      const heldDiceSetCount = get().currentTurn.heldDice.length

      //Add held dice to last element in current turn's held dice
      set(state => ({
        currentTurn: {
          ...state.currentTurn,
          heldDice: state.currentTurn.heldDice.map((set, index) => {
            if (index === heldDiceSetCount - 1) {
              return diceValues
            } else {
              return set
            }
          })
        }
      }))

      //Update points for current turn
      set(state => ({
        currentTurn: {
          ...state.currentTurn,
          points: evaluateDiceSet(state.currentTurn.heldDice)
        }
      }))

      //Sort dice for placement in dice rack
      useDiceStore.getState().actions.sortDice()
    },

    endTurn: () => {
      //if not farkle add turn points to total points
      if (!get().currentTurn.farkled) {
        set(state => ({
          totalPoints: state.totalPoints += state.currentTurn.points
        }))
      }

      //copy current turn to turns array
      set(state => ({
        turns: [...state.turns, state.currentTurn]
      }))

      //reset current turn
      set({
        currentTurn: {
          rolls: [],
          heldDice: [],
          points: 0,
          farkled: false
        }
      })

      //reset status and locations of dice
      useDiceStore.getState().actions.resetDice()

      //check for victory
      if(get().totalPoints >= 10000){
        set({
          status: 'You win'
        })
      } else {
        set({
          status: 'preroll'
        })
      }
    }
  }
}))

export const useTurns = () => useGameStore((state) => state.turns)
export const useCurrentTurn = () => useGameStore((state) => state.currentTurn)
export const useStatus = () => useGameStore((state) => state.status)
export const useTotalPoints = () => useGameStore((state) => state.totalPoints)
export const useGameActions = () => useGameStore((state) => state.actions)