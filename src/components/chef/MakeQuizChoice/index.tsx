import { useState } from "react";
import { useModalStateStore } from "../../../store/modal";
import { useModalHeight } from "../../../hook/useModalHeight";
import { useCreateToppingStore } from "../../../store/api/topping";
import { Circle, X } from "lucide-react";
import { Flex, IconButton, Box, Input, Button } from "@chakra-ui/react";
import {
  ModalTitle,
  ModalInsideGreyInput,
} from "../../home/ModalCustomedElement";
import { BlueEllipseButton } from "../../common/CustomedButton";

export const MakeQuizChoice = () => {
  const { setModalState } = useModalStateStore();
  const { requestBody, setQuizTitle, setQuestions } = useCreateToppingStore();
  useModalHeight(requestBody.quiz.quizType === "Multiple" ? "80%" : "70%");
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
  // 선지 관리 상태
  const [options, setOptions] = useState([
    { text: "", isSelected: false }, // 기본 선지 1
    { text: "", isSelected: false }, // 기본 선지 2
  ]);

  // 추가 버튼으로 선지 추가
  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, { text: "", isSelected: false }]);
    }
  };

  // 입력값 변경 핸들러
  const handleInputChange = (index: number, value: string) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, text: value } : option
    );
    setOptions(updatedOptions);
  };

  // 선지 선택 핸들러
  const handleSelectOption = (index: number) => {
    const updatedOptions = options.map((option, i) => ({
      ...option,
      isSelected: i === index, // 선택된 선지만 true로 설정
    }));
    setOptions(updatedOptions);

    // questions 업데이트
    setQuestions(
      updatedOptions.map((option) => ({
        first: option.text,
        second: option.isSelected,
      }))
    );
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
          <BlueEllipseButton onClick={goSetChefName}>
            작성 완료
          </BlueEllipseButton>
        </Box>
      </>
    );
  } else if (requestBody.quiz.quizType === "Multiple") {
    return (
      <>
        <ModalTitle title="객관식 퀴즈 내기" />
        <Flex w="100%" h="30%" mt="20px">
          <ModalInsideGreyInput
            value={requestBody.quiz.quizTitle}
            height="100%"
            placeholder="퀴즈 제목을 작성하세요"
            maxLength={30}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </Flex>

        {/* 선지 입력 필드 */}
        <Flex direction="column" gap="10px" mt="20px">
          {options.map((option, index) => (
            <Flex
              key={index}
              align="center"
              bg="white"
              p="10px"
              borderRadius="10px"
              border={option.isSelected ? "2px solid green" : "1px solid #ccc"}
              boxShadow={option.isSelected ? "0 0 5px green" : "none"}
            >
              <Input
                placeholder="선지를 작성해주세요"
                value={option.text}
                onChange={(e) => handleInputChange(index, e.target.value)}
                bg="white"
                flex="1"
              />
              <Button
                ml="10px"
                bg={option.isSelected ? "green.200" : "gray.100"}
                onClick={() => handleSelectOption(index)}
              >
                {option.isSelected ? "정답" : "선택"}
              </Button>
            </Flex>
          ))}
          {/* 선지 추가 버튼: 선지 개수가 4개 미만일 때만 표시 */}
          {options.length < 4 && (
            <Button
              onClick={addOption}
              variant="outline"
              bg="transparent"
              border="1px dashed #ccc"
              color="#888"
              _hover={{ bg: "white", color: "black" }}
              isDisabled={options.length >= 4} // 최대 2개 제한
            >
              + 클릭해서 선지를 추가하세요
            </Button>
          )}
        </Flex>

        <Box w="calc(100% - 200px)" mt="10px">
          <BlueEllipseButton onClick={goSetChefName}>
            작성 완료
          </BlueEllipseButton>
        </Box>
      </>
    );
  } else {
    return <div>OX 퀴즈 내기</div>;
  }
};
