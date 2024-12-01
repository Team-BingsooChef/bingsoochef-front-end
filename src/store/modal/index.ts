import { create } from "zustand";


type ModalOpenState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  
  export const useModalOpenStore = create<ModalOpenState>((set) => ({
    isOpen: false, // 초기 모달 상태
    onOpen: () => set({ isOpen: true }), // 모달 열기 함수
    onClose: () => set({ isOpen: false }), // 모달 닫기 함수
  }));
  
  type ModalHeightState = {
    height: string;
    setHeight: (height: string) => void;
  };
  
  export const useModalHeightStore = create<ModalHeightState>((set) => ({
    height: "70%", // 초기 모달 높이
    setHeight: (height) => set({ height }),
  }));
  
  type ModalStateStore = {
    modalState: string;
    setModalState: (newState: string) => void;
  }
  
  export const useModalStateStore = create<ModalStateStore>((set) => ({
    modalState: "selectTopping",
    setModalState: (newState) => set({ modalState: newState }),
  }));
