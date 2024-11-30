import { create } from "zustand";
import { CreateToppingRequestBody } from "../../api/bingsoo/types";

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

  interface CreateToppingStore {
    requestBody: CreateToppingRequestBody;
    setUserId: (userId: number) => void;
    setBingsooId: (bingsooId: number) => void;
    setTopping: (topping: CreateToppingRequestBody["topping"]) => void;
    setToppingTypeId: (toppingTypeId: number) => void;
    setQuiz: (quiz: CreateToppingRequestBody["quiz"]) => void;
  }

  export const useCreateToppingStore = create<CreateToppingStore>((set) => ({
    requestBody: {
      userId: 0,
      bingsooId: 0,
      topping: {
        chefName: "",
        toppingTitle: "",
        toppingContent: "",
      },
      toppingTypeId: 0,
      quiz: {
        quizTitle: "",
        quizType: "OX",
        questions: [],
      },
    },
    setUserId: (userId) => set((state) => ({ requestBody: { ...state.requestBody, userId } })),
    setBingsooId: (bingsooId) =>
      set((state) => ({ requestBody: { ...state.requestBody, bingsooId } })),
    setTopping: (topping) =>
      set((state) => ({ requestBody: { ...state.requestBody, topping } })),
    setToppingTypeId: (toppingTypeId) =>
      set((state) => ({ requestBody: { ...state.requestBody, toppingTypeId } })),
    setQuiz: (quiz) =>
      set((state) => ({ requestBody: { ...state.requestBody, quiz } })),
  }));