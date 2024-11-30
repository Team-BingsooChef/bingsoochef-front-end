import { create } from "zustand";

// Zustand 스토어 생성
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
  setHeight: (height) => set({ height }), // 모달 높이 설정 함수
}));