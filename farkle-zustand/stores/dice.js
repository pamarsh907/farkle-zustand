import { create } from 'zustand'
import { getUniqueRandomXY } from '../utils/diceUtils'

const defaultDice = [
  { id: 1, value: 1, onBoard: false, held: false, locked: true, grouping: 0, xLoc: 0, yLoc: 0 },
  { id: 2, value: 1, onBoard: false, held: false, locked: true, grouping: 0, xLoc: 0, yLoc: 0 },
  { id: 3, value: 1, onBoard: false, held: false, locked: true, grouping: 0, xLoc: 0, yLoc: 0 },
  { id: 4, value: 1, onBoard: false, held: false, locked: true, grouping: 0, xLoc: 0, yLoc: 0 },
  { id: 5, value: 1, onBoard: false, held: false, locked: true, grouping: 0, xLoc: 0, yLoc: 0 },
  { id: 6, value: 1, onBoard: false, held: false, locked: true, grouping: 0, xLoc: 0, yLoc: 0 }
]

//die status, make enume for onBoard, atHome, held
const useDiceStore = create((set, get) => ({
  dice: defaultDice,
  currentGrouping: 0,
  actions: {
    rollDice: () => set(state => {
      const newGrouping = state.currentGrouping + 1
      const usedPositions = []

      const dice = state.dice.map((die) => {
        const [x, y] = getUniqueRandomXY(
          50,
          450,
          usedPositions,
          50
        )
        usedPositions.push([x, y])

        if (die.held === false) {
          return {
            ...die,
            value: Math.floor(Math.random() * 6) + 1,
            onBoard: true,
            xLoc: x,
            yLoc: y,
            locked: false
          }
        } else {
          return die
        }
      })

      return {
        dice: dice,
        currentGrouping: newGrouping
      }
    }),
    toggleHoldDie: (id) => set(state => {
      const dice = state.dice
      const reorderedArr = [
        ...dice.filter(item => item.id !== id),
        dice.find(item => item.id === id)
      ]

      return {
        dice: reorderedArr.map((die) => die.id === id ? ({
          ...die,
          held: !die.held,
          onBoard: !die.onBoard,
          grouping: die.held ? 0 : state.currentGrouping
        }) : die)
      }
    }
    ),
    rollDie: (id) => set(
      state => ({
        dice: state.dice.map((die) => die.id === id ? ({
          ...die,
          value: Math.floor(Math.random() * 6) + 1,
          xLoc: Math.floor(Math.random() * 500),
          yLoc: Math.floor(Math.random() * 500)
        }) : die)
      })
    ),
    lockDie: (id) => set(
      state => ({
        dice: state.dice.map((die) => die.id === id ? ({
          ...die,
          locked: true
        }) : die)
      })
    ),
    resetDice: () => set({
      dice: defaultDice,
      currentGrouping: 0
    }),
    sortDice: () => {
      const dice = get().dice
      const sortedDice = dice.sort((a, b) => a.value - b.value)

      set({
        dice: sortedDice
      })
    }
  }
}))

export const useDice = () => useDiceStore((state) => state.dice)
export const useCurrentGrouping = () => useDiceStore((state) => state.currentGrouping)
export const useDiceActions = () => useDiceStore((state) => state.actions)

export default useDiceStore