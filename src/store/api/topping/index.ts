
import { CreateToppingRequestBody } from "../../../api/topping/types";
import { create } from "zustand";

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