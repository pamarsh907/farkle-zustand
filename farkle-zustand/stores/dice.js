import { create } from 'zustand'

const useDiceStore = create((set) => ({
  dice: [
    {id: 1, value: 1, selected: false, xLoc: 0, yLoc: 0},
    {id: 2, value: 1, selected: false, xLoc: 0, yLoc: 0},
    {id: 3, value: 1, selected: false, xLoc: 0, yLoc: 0},
    {id: 4, value: 1, selected: false, xLoc: 0, yLoc: 0},
    {id: 5, value: 1, selected: false, xLoc: 0, yLoc: 0},
    {id: 6, value: 1, selected: false, xLoc: 0, yLoc: 0}
  ],
  actions: {
    rollAllDice: () => set(
      state => ({ 
        dice: state.dice.map((die) => ({
          ...die,
          selected: false,
          value: Math.floor(Math.random() * 6) + 1
        }))
      })
    ),
    selectDie: (id) => set(
      state => ({
        dice: state.dice.map((die) => die.id === id ? {...die, selected: !die.selected} : die)
      })
    )
  }
}))

export const useDice = () => useDiceStore((state) => state.dice)
//export const useSelectedDice = () => useDiceStore((state) => state.dice.filter((die) => die.selected))

export const useDiceActions = () => useDiceStore((state) => state.actions)