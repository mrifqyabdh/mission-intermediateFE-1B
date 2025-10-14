import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useDaftarSaya = create(persist((set) => ({
  list: [],
 setList: (data) => set((state) => ({
  list: [...state.list, ...(Array.isArray(data) ? data : [data])]
}))

}), {
  name: 'daftar-saya',
  storage: createJSONStorage(() => localStorage)
}))

export default useDaftarSaya;