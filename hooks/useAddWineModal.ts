import { create } from 'zustand';

interface UseAddWineModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAddWineModal = create<UseAddWineModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useAddWineModal;