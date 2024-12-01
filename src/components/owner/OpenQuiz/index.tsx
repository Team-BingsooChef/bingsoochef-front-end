import { useState } from "react";
import { useModalStateStore } from "../../../store/modal";
import { useModalHeight } from "../../../hook/useModalHeight";
// import { useSelectedToppingStore } from "../../../store/api/topping";
import { Circle, X } from "lucide-react";
import { Flex, IconButton, Button, useToast } from "@chakra-ui/react";
import { quizSampleOXData, quizSampleMultipleData } from '../../../__mocks__/quiz/data';
import {
  ModalTitle,
  ModalInsideGreyContainer,
} from "../../home/ModalCustomedElement";


export const OpenQuiz = () => {
  const { setModalState } = useModalStateStore();
  const toast = useToast();
  const exampleOXAnswer = "O";
  const exampleMultipleAnswer = 1;
  // const { selectedToppingId } = useSelectedToppingStore();
  
  // 나중엔 toppingId, userId로 퀴즈 조회해서 받아옴"

  useModalHeight(quizSampleOXData.quiz.quizType === "Multiple" ? "80%" : "50%");
  // OX 퀴즈 상태
  const [selectedAnswer, setSelectedAnswer] = useState<"O" | "X" | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<"O" | "X" | null>(null);
 
  // 객관식 퀴즈 상태
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctOption, setCorrectOption] = useState<number | null>(null);

  // OX 버튼 클릭 핸들러
  const handleOXAnswerClick = (answer: "O" | "X") => {
    setSelectedAnswer(answer); // 선택한 답변 저장

    const isCorrect = exampleOXAnswer === answer; // 정답 확인
    setCorrectAnswer(exampleOXAnswer); // 정답 저장
    if (isCorrect) {
      toast({
        title: "정답입니다!",
        description: "토핑이 오픈됩니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setModalState("readMessage");
    } else {
      toast({
        title: "틀렸습니다.",
        description: "다시 시도해 주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


    // 객관식 버튼 클릭 핸들러
    const handleMultipleAnswerClick = (index: number) => {
      setSelectedOption(index);
      const isCorrect = exampleMultipleAnswer === index; // 정답 확인
      setCorrectOption(exampleMultipleAnswer); // 정답 저장
      if (isCorrect) {
        toast({
          title: "정답입니다!",
          description: "토핑이 오픈됩니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setModalState("readMessage");
      } else {
        toast({
          title: "틀렸습니다.",
          description: "다시 시도해 주세요.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };



   // OX 퀴즈 렌더링
   if (quizSampleMultipleData.quiz.quizType === "OX") {
    return (
      <>
        <ModalTitle title="OX 퀴즈" />
        <Flex w="100%" h="30%" mt="20px" justify="center">
          <ModalInsideGreyContainer height="100%">
            Q. {quizSampleOXData.quiz.quizTitle}
          </ModalInsideGreyContainer>
        </Flex>
        <Flex gap="40px" mt="20px" justify="center">
          <IconButton
            borderRadius="30px"
            boxSize="140px"
            aria-label="O"
            icon={<Circle size={100} color="blue" />}
            border={
              selectedAnswer === "O"
                ? correctAnswer === "O"
                  ? "5px solid green"
                  : "5px solid red"
                : "none"
            }
            onClick={() => handleOXAnswerClick("O")}
          />
          <IconButton
            borderRadius="30px"
            boxSize="140px"
            aria-label="X"
            icon={<X size={120} color="red" />}
            border={
              selectedAnswer === "X"
                ? correctAnswer === "X"
                  ? "5px solid green"
                  : "5px solid red"
                : "none"
            }
            onClick={() => handleOXAnswerClick("X")}
          />
        </Flex>
      </>
    );
  }
   // 객관식 퀴즈 렌더링
   if (quizSampleMultipleData.quiz.quizType === "Multiple") {
    return (
      <>
        <ModalTitle title="객관식 퀴즈" />
        <Flex w="100%" h="30%" mt="20px" justify="center">
          <ModalInsideGreyContainer>Q. {quizSampleMultipleData.quiz.quizTitle}</ModalInsideGreyContainer>
        </Flex>
        <Flex direction="column" gap="10px" mt="20px" width="100%" align="center">
          {quizSampleMultipleData.questions.map((option, index) => (
            <Button
            width="calc(100% - 40px)"
              key={index}
              borderRadius="12px"
              onClick={() => handleMultipleAnswerClick(index)}
              border={
                selectedOption === index
                  ? correctOption === index
                    ? "5px solid green"
                    : "5px solid red"
                  : "none"
              }
              bg="#03526B"
              color="white"
              _hover={{ bg: "blue.600" }}
            >
              {option.questionContent}
            </Button>
          ))}
        </Flex>
      </>
    );
  }

  return null;
};