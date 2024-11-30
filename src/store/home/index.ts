import { create } from "zustand";

type PaginationState = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setTotalPages: (pages: number) => void;
};

export const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 0, // 초기 페이지
  totalPages: 2, // 전체 페이지 수
  setCurrentPage: (page) => set({ currentPage: page }), // 페이지 설정 함수
  setTotalPages: (pages) => set({ totalPages: pages }), // 전체 페이지 수 설정 함수
}));

