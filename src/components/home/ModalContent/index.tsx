import { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useModalHeightStore, useModalStateStore } from "../../../store/modal";
//Chef의 Modal component들은 AddTopping에, Owner의 Modal component들은 ClickTopping에 들어가져있음
export const ModalContent = () => {
  const { setHeight, height } = useModalHeightStore();
  const { modalState } = useModalStateStore();
  useEffect(() => {
    // 현재 컴포넌트의 높이를 설정
    setHeight("70%");
  }, [setHeight]); // 컴포넌트가 렌더링될 때만 실행

  switch (modalState) {
    //chef 입장
    case "selectTopping":
      return <div>Select your toppings!</div>;
    case "writeMessage":
      return <div>Confirm your order!</div>;
    case "quizOrNot":
      return <div>Confirm your order!</div>;
    case "selectQuizType":
      return <div>Confirm your order!</div>;
    case "makeQuizOfMultiple":
      return <div>Confirm your order!</div>;
    case "makeQuizOfOx":
      return <div>Confirm your order!</div>;
    case "setChefName":
      return <div>Confirm your order!</div>;
      //여기서부턴 owner 입장
      case "openQuiz":
        return <div>Select your toppings!</div>;
      case "replyOrNot":
        return <div>Confirm your order!</div>;
      case "replyLetter":
        return <div>Confirm your order!</div>;
      case "readMessage":
        return <div>Confirm your order!</div>;
    default:
      return <div>Default Modal Content</div>;
  }
};
