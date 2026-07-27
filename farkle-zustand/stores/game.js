import { create } from 'zustand'
import { useDice } from './dice'
import useDiceStore from './dice'
import { useDiceActions } from './dice'
import { evaluateDice } from '../utils/scoreUtils'

const useGameStore = create((set, get) => ({
  turns: [],
  totalPoints: 0,
  status: 'pregame',
  actions: {
    setStatus: (newStatus) => set({
      status: newStatus
    }),
    roll: () => {
      //TODO: check if all dice are held
      //if so then reset dice and roll all

      //TODO: each roll we should save data into the turns array, for held dice
      //maybe on roll we create the new object, then on hold dice we add to it?

      const state = get()
      if(state.status === 'valid' || state.status === 'pregame'){
        useDiceStore.getState().actions.rollDice()
        const dice = useDiceStore.getState().dice.filter(die => die.onBoard)
        const result = evaluateDice(dice)
  
        if (result.scoringDice === 0) {
          set({ status: 'farkle' })
        } else {
          set({ status: 'invalid' })
        }
      }
    },
    holdDie: (id) => {
      useDiceStore.getState().actions.toggleHoldDie(id)
      const heldDice = useDiceStore.getState().dice.filter(die => die.held === true)
      const result = evaluateDice(heldDice)
      if (result.scoringDice < heldDice.length) {
        set({ status: 'invalid' })
      } else {
        set({ status: 'valid' })
      }
    },
    endTurn: () => {

    }

    //finish turn
    //
  }
}))

export const useTurns = () => useGameStore((state) => state.turns)
export const useStatus = () => useGameStore((state) => state.status)
export const useTotalPoints = () => useGameStore((state) => state.totalPoints)
export const useGameActions = () => useGameStore((state) => state.actions)