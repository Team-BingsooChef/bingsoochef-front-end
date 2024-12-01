import { useEffect } from "react";
import { useModalHeightStore } from "../store/modal";

export const useModalHeight = (height: string) => {
  const { setHeight } = useModalHeightStore();

  useEffect(() => {
    setHeight(height);
  }, [setHeight, height]);
};
