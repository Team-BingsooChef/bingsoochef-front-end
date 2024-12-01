import { CreateToppingRequestBody } from "../../../api/topping/types";
import { create } from "zustand";

// 질문 데이터 형식 정의
interface Question {
  first: string; // 선택된 답변 ("O" 또는 "X")
  second: boolean; // 부가 정보 (true)
}

interface CreateToppingStore {
  requestBody: CreateToppingRequestBody;
  setUserId: (userId: number) => void;
  setBingsooId: (bingsooId: number) => void;
  setTopping: (topping: CreateToppingRequestBody["topping"]) => void;
  setToppingTypeId: (toppingTypeId: number) => void;
  setQuiz: (quiz: CreateToppingRequestBody["quiz"]) => void;
  setQuizType: (quizType: string) => void; // quizType 업데이트 메서드
  setQuizTitle: (quizTitle: string) => void; // quizTitle 업데이트 메서드
  setQuestions: (questions: Question[]) => void; // 질문 업데이트 메서드
  setToppingContent: (toppingContent: string) => void; // toppingContent 업데이트 메서드
  setChefName: (chefName: string) => void; // chefName 업데이트 메서드
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
      questions: [], // 초기값
    },
  },
  setUserId: (userId) =>
    set((state) => ({ requestBody: { ...state.requestBody, userId } })),
  setBingsooId: (bingsooId) =>
    set((state) => ({ requestBody: { ...state.requestBody, bingsooId } })),
  setTopping: (topping) =>
    set((state) => ({ requestBody: { ...state.requestBody, topping } })),
  setToppingTypeId: (toppingTypeId) =>
    set((state) => ({ requestBody: { ...state.requestBody, toppingTypeId } })),
  setQuiz: (quiz) =>
    set((state) => ({ requestBody: { ...state.requestBody, quiz } })),
  setQuizType: (quizType) =>
    set((state) => ({
      requestBody: {
        ...state.requestBody,
        quiz: { ...state.requestBody.quiz, quizType },
      },
    })), // quizType만 업데이트
  setQuizTitle: (quizTitle) =>
    set((state) => ({
      requestBody: {
        ...state.requestBody,
        quiz: { ...state.requestBody.quiz, quizTitle },
      },
    })), // quizTitle만 업데이트
  setQuestions: (questions) =>
    set((state) => ({
      requestBody: {
        ...state.requestBody,
        quiz: { ...state.requestBody.quiz, questions },
      },
    })), // questions 배열 업데이트
  setToppingContent: (toppingContent) =>
    set((state) => ({
      requestBody: {
        ...state.requestBody,
        topping: { ...state.requestBody.topping, toppingContent },
      },
    })), // toppingContent만 업데이트
  setChefName: (chefName) =>
    set((state) => ({
      requestBody: {
        ...state.requestBody,
        topping: { ...state.requestBody.topping, chefName },
      },
    })), // chefName만 업데이트
}));
