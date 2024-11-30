import { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useModalHeightStore, useModalStateStore } from "../../../store/modal";




export const ModalContent = () => {

  const { setHeight, height } = useModalHeightStore();
  const { modalState } = useModalStateStore();
  useEffect(() => {
    // 현재 컴포넌트의 높이를 설정
    setHeight("70%");
  }, [setHeight]); // 컴포넌트가 렌더링될 때만 실행

  
    switch (modalState) {
      case "selectTopping":
        return <div>Select your toppings!</div>;
      case "confirmOrder":
        return <div>Confirm your order!</div>;
      default:
        return <div>Default Modal Content</div>;
    }

};



