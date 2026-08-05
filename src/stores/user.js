import { create } from 'zustand'
import gameService from '../services/game'

const useUserStore = create((set, get) => ({
  user: null,
  actions: {
    setUser: (loggedInUser) => {
      set({
        user: loggedInUser
      })
    },
    fetchGames: async () => {
      const user = get().user
      if (!user) {
        return []
      }  
      const response = await gameService.getUserGames(user.id)
      return response
    },
    fetchAllGames: async () => {
      const response = await gameService.getAll()
      return response
    },
  }
}))

export const useUser = () => useUserStore((state) => state.user)
export const useUserActions = () => useUserStore((state) => state.actions)

export default useUserStore