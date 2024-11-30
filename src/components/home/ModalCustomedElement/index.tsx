import styled from "@emotion/styled";
import { Text, Input, Box, Flex } from "@chakra-ui/react";

interface ModalInsideContainerProps {
  height?: string; // height를 선택적으로 받음
}

export const ModalInsideGreyContainer = styled.div<ModalInsideContainerProps>`
  background: #D9D9D9;
  border-radius: 30px;
  width: calc(100% - 20px);
  height: ${(props) =>
    props.height || "auto"}; // props로 받은 height 또는 기본값
`;

export const ModalInsideGreyInput = styled(Input)<ModalInsideContainerProps>`
  background: #D9D9D9;
  border-radius: 30px;
  width: calc(100% - 20px);
  height: ${(props) =>
    props.height || "auto"}; // props로 받은 height 또는 기본값
`;

export const ModalInsideWhiteContainer = styled.div<ModalInsideContainerProps>`
  background: white;
  border-radius: 30px;
  width: calc(100% - 10px);
  height: ${(props) =>
    props.height || "auto"}; // props로 받은 height 또는 기본값
`;

interface ModalTitleProps {
  title: string; // 표시할 제목
}

export const ModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <Text fontSize="32px" color="white" top="0px" mt="24px" position="absolute">
      {title}
    </Text>
  );
};

interface LetterTopInfoProps {
  text: string;
  nickname: string;
}

export const LetterTopInfo = ({ text, nickname }: LetterTopInfoProps) => {
  return (
    <Flex justify="center">
      <Text color="white" fontSize="24px">
        {text}
      </Text>
      <Box
        backgroundColor="#D2ECF3"
        color="007DA4"
        borderRadius="30px"
        width="60%"
      >
        {nickname}
      </Box>
    </Flex>
  );
};
