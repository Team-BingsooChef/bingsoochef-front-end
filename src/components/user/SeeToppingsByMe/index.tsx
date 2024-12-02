import { Box, Text, Flex } from "@chakra-ui/react";
import { ModalInsideWhiteContainer } from "../../home/ModalCustomedElement";
import { toppingExamples } from "../../../__mocks__/toppingbyme/data";

export const SeeToppingsByMe = () => {
  return (
    <Flex
      mt="20px"
      flexDir="column"
      w="full"
      h="80vh" // 부모 높이 설정 (뷰포트 기준)
      maxH="800px" // 최대 높이 제한
      align="center"
      justify="center"
      overflow="hidden" // 부모에서 초과된 내용 숨기기
    >
      <Box
        w="full"
        h="100%"
        overflowY="auto" // 스크롤 활성화
        borderRadius="16px"
        p="16px"
        bg="none"
      >
        {toppingExamples.map((topping) => (
          <ToppingByMeElement key={topping.id} {...topping} />
        ))}
      </Box>
    </Flex>
  );
};

interface ToppingByMeElementProps {
  nickname: string;
  toppingContent: string;
  isHidden: boolean;
  wrongCount: number;
  isReplied: boolean;
}

const ToppingByMeElement = ({
  nickname,
  toppingContent,
  isHidden,
  wrongCount,
  isReplied,
}: ToppingByMeElementProps) => {
  return (
    <Flex
      flexDir="column"
      w="full"
      justify="center"
      align="center"
      backgroundColor="#B8F7FE"
      h="300px"
      borderRadius="50px"
      mb="16px" // 각 요소 간격
    >
      <Text color="#1581A3" fontSize="24px">
        To. {nickname}
      </Text>
      <ModalInsideWhiteContainer height="160px">
        <Box
          w="full"
          h="full"
          backgroundColor="white"
          borderRadius="16px"
          p="20px"
        >
          {toppingContent}
        </Box>
      </ModalInsideWhiteContainer>
      <Box mt="16px">
        {isHidden ? (
          <Text fontSize="16px" color="#777C89">
            주인이 아직 편지를 열어보지 않았어요!
          </Text>
        ) : (
          <>
            <Text fontSize="14px" color="#777C89">
              이 편지는 {wrongCount}번 만에 열어봤어요!
            </Text>
            <Text fontSize="14px" color="#777C89" mt="4px">
              {isReplied
                ? "주인이 답장을 남겼어요! 답장 보러 가기"
                : "주인이 답장을 남기지 않았어요."}
            </Text>
          </>
        )}
      </Box>
    </Flex>
  );
};
