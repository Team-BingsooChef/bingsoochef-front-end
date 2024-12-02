import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { ModalInsideWhiteContainer } from "../../home/ModalCustomedElement";
import { toppingExamples } from "../../../__mocks__/toppingbyme/data";
import { toppingTypesData } from "../../../__mocks__/toppingtypes/data";

// SeeToppingsByMe 컴포넌트
export const SeeToppingsByMe = () => {
  return (
    <Flex
      mt="20px"
      flexDir="column"
      w="full"
      h="80vh"
      align="center"
      justify="center"
      overflow="hidden"
    >
      <Box
        w="full"
        h="100%"
        overflowY="auto"
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
  toppingTypeId: number;
}

const ToppingByMeElement = ({
  nickname,
  toppingContent,
  isHidden,
  wrongCount,
  isReplied,
  toppingTypeId,
}: ToppingByMeElementProps) => {
  // toppingTypeId를 기반으로 defrostedImg 가져오기
  const toppingType = toppingTypesData.find(
    (type: { toppingTypeId: number; defrostedImg: string }) => type.toppingTypeId === toppingTypeId
  );
  const defrostedImg = toppingType?.defrostedImg;

  return (
    <Flex
      flexDir="column"
      w="full"
      justify="center"
      align="center"
      backgroundColor="#B8F7FE"
      h="300px"
      borderRadius="50px"
      mb="16px"
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
          position="relative"
        >
          {/* 모서리에 defrostedImg 아이콘 표시 */}
          {defrostedImg && (
            <Image
              src={defrostedImg}
              alt="topping icon"
              position="absolute"
              top="-20px"
              right="0px"
              boxSize="50px"
              cursor="pointer"
            />
          )}
          <Text fontSize="16px" color="#03526B">
            {toppingContent}
          </Text>
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
