import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: null,
  actions: {
    setUser: (loggedInUser) => set({
      user: loggedInUser
    })
  }
}))

export const useUser = () => useUserStore((state) => state.user)
export const useUserActions = () => useUserStore((state) => state.actions)

export default useUserStore