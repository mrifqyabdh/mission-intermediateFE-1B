import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useDaftarSaya = create(persist((set) => ({
  list: [
    {
      img:"posters/poster1-tinggi.png"
    },
    {
      img:"posters/poster2-tinggi.png"
    },
    {
      img:"posters/poster3-tinggi.png"
    },
    {
      img:"posters/poster4-tinggi.png"
    },
    {
      img:"posters/poster5-tinggi.png"
    },
    {
      img:"posters/poster6-tinggi.png"
    },
    {
      img:"posters/poster7-tinggi.png"
    },
    {
      img:"posters/poster8-tinggi.png"
    },
    {
      img:"posters/poster9-tinggi.png"
    },
  ],
  setList: (data) => set((state) => ({ list: [data, ...state.list] })),

}), {
  name: 'daftar-saya',
  storage: createJSONStorage(() => localStorage)
}))

export default useDaftarSaya;