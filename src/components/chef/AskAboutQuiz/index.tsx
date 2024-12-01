import { useModalHeight } from "../../../hook/useModalHeight";
import { useModalStateStore } from "../../../store/modal";
import {Text, Flex} from "@chakra-ui/react";
import { BlueEllipseButton } from "../../common/CustomedButton";
import { useCreateToppingStore } from '../../../store/api/topping/index';

export const QuizOrNot = () => {
    const { setModalState } = useModalStateStore();
    useModalHeight("24%"); 

    const goSetChefName = () => {
        setModalState("setChefName");
        };
    const goSelectQuizType = () => {
        setModalState("selectQuizType");
        };
    return (
    <>
    <Text color="white" fontSize="24px">퀴즈를 만드시겠습니까?</Text>
    <Flex w="calc(100% - 90px)" gap="24px" mt="20px">
    <BlueEllipseButton onClick={goSelectQuizType}>예</BlueEllipseButton>
    <BlueEllipseButton onClick={goSetChefName}>아니요</BlueEllipseButton>
    </Flex>
    </>
    );
  };
  
  export const SelectQuizType = () => {
    const { setModalState } = useModalStateStore();
    const { setQuizType } = useCreateToppingStore();
  
    // 퀴즈 타입 설정 후 모달 상태 변경
    const handleSetQuizType = (type: string) => {
      setQuizType(type); // 전달받은 타입으로 quizType 업데이트
      setModalState("makeQuizChoice"); // 모달 상태 변경
    };
  
    useModalHeight("24%"); // 모달 높이 설정
  
    return (
      <>
        <Text color="white" fontSize="24px">퀴즈를 만드시겠습니까?</Text>
        <Flex w="calc(100% - 90px)" gap="24px" mt="20px">
          <BlueEllipseButton onClick={() => handleSetQuizType("Multiple")}>
            객관식
          </BlueEllipseButton>
          <BlueEllipseButton onClick={() => handleSetQuizType("OX")}>
            O/X
          </BlueEllipseButton>
        </Flex>
      </>
    );
  };
  