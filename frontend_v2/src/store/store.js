import {create} from 'zustand'

export const useGlobalStore = create((set) => ({
  user: null,
  setUser: (value) => set(() => ({user: value}))
}))
