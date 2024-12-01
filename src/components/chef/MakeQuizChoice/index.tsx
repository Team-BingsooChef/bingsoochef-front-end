import { useState } from "react";
import { useModalStateStore } from "../../../store/modal";
import { useModalHeight } from "../../../hook/useModalHeight";
import { useCreateToppingStore } from "../../../store/api/topping";
import { Circle, X } from "lucide-react";
import { Flex, IconButton, Box } from "@chakra-ui/react";
import {
  ModalTitle,
  ModalInsideGreyInput,
} from "../../home/ModalCustomedElement";
import { BlueEllipseButton } from "../../common/CustomedButton";

export const MakeQuizChoice = () => {
  useModalHeight("70%");
  const { setModalState } = useModalStateStore();
  const { requestBody, setQuizTitle, setQuestions } = useCreateToppingStore();

  // 클릭 상태 관리
  const [selectedAnswer, setSelectedAnswer] = useState<"O" | "X" | null>(null);

  // 버튼 클릭 핸들러
  const handleAnswerClick = (answer: "O" | "X") => {
    setSelectedAnswer(answer); // 선택한 답변 저장
    setQuestions([{ first: answer, second: true }]); // 질문 데이터 설정
  };

  const goSetChefName = () => {
    setModalState("setChefName");
  };

  if (requestBody.quiz.quizType === "OX") {
    return (
      <>
        <ModalTitle title="OX 퀴즈 내기" />
        <Flex w="100%" h="30%" mt="20px">
          <ModalInsideGreyInput
            value={requestBody.quiz.quizTitle}
            height="100%"
            placeholder="퀴즈 작성"
            maxLength={30}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </Flex>
        <Flex gap="40px" mt="20px">
          {/* O 버튼 */}
          <IconButton
            borderRadius="30px"
            boxSize="140px"
            aria-label="Circle"
            icon={<Circle size={100} color="blue" />}
            variant="solid"
            border={selectedAnswer === "O" ? "5px solid green" : "none"} // 선택 효과
            onClick={() => handleAnswerClick("O")}
          />
          {/* X 버튼 */}
          <IconButton
            borderRadius="30px"
            boxSize="140px"
            aria-label="X"
            icon={<X size={120} color="red" />}
            variant="solid"
            border={selectedAnswer === "X" ? "5px solid green" : "none"} // 선택 효과
            onClick={() => handleAnswerClick("X")}
          />
        </Flex>
        <Box w="calc(100% - 200px)" mt="90px">
          <BlueEllipseButton onClick={goSetChefName}>작성 완료</BlueEllipseButton>
        </Box>
      </>
    );
  } else if (requestBody.quiz.quizType === "Multiple") {
    return <div>Make Quiz of Multiple</div>;
  }
};
