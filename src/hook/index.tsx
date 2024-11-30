// Custom Hook for consuming the context
import { ModalStateContext, ModalStateContextType } from "../contexts";
import { useContext } from "react";

export const useModalState = (): ModalStateContextType => {
    const context = useContext(ModalStateContext);
    if (!context) {
      throw new Error("useModalState must be used within a ModalStateProvider");
    }
    return context;
  };
  