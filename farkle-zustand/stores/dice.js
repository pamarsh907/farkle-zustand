import { create } from 'zustand'

//die status, make enume for onBoard, atHome, held
const useDiceStore = create((set) => ({
  dice: [
    { id: 1, value: 1, onBoard: false, held: false, xLoc: 0, yLoc: 0 },
    { id: 2, value: 1, onBoard: false, held: false, xLoc: 0, yLoc: 0 },
    { id: 3, value: 1, onBoard: false, held: false, xLoc: 0, yLoc: 0 },
    { id: 4, value: 1, onBoard: false, held: false, xLoc: 0, yLoc: 0 },
    { id: 5, value: 1, onBoard: false, held: false, xLoc: 0, yLoc: 0 },
    { id: 6, value: 1, onBoard: false, held: false, xLoc: 0, yLoc: 0 }
  ],
  actions: {
    rollDice: () => set(
      state => ({
        dice: state.dice.map((die) => die.held === false ? ({
          ...die,
          value: Math.floor(Math.random() * 6) + 1,
          onBoard: true,
          xLoc: Math.floor(Math.random() * 200),
          yLoc: Math.floor(Math.random() * 200)
        }) : die)
      })
    ),
    toggleHoldDie: (id) => set(
      state => ({
        dice: state.dice.map((die) => die.id === id ? ({
          ...die,
          held: !die.held,
          onBoard: !die.onBoard
        }) : die)
      })
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
    )
  }
}))

export const useDice = () => useDiceStore((state) => state.dice)
export const useDiceActions = () => useDiceStore((state) => state.actions)