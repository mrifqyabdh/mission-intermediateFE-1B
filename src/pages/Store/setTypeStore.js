import { create } from "zustand";

const useTypeStore = create((set) => ({
    typeStore: "password",
    setTypeText: () => set(() => ({ typeStore: "text" })),
    setTypePassword: () => set(() => ({ typeStore: "password" }))
}));

export default useTypeStore;