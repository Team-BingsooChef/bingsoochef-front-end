import { createContext, useContext } from "react";

interface ModalHeightContextProps {
  height: string;
}

export const ModalHeightContext = createContext<ModalHeightContextProps | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalHeightContext);

  return context;
};
