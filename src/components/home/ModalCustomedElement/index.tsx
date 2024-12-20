import styled from "@emotion/styled";
import { Text, Input, Box, Flex } from "@chakra-ui/react";

interface ModalInsideContainerProps {
  height?: string; // height를 선택적으로 받음
  value?: string;
  placeholder?: string;
  maxLength?: number; // 최대 글자 수 (선택)
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 입력값 변경 핸들러
}

export const ModalInsideGreyContainer = styled.div<ModalInsideContainerProps>`
  background: #d9d9d9;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 20px);
  height: ${(props) =>
    props.height || "auto"}; // props로 받은 height 또는 기본값
`;

// 스타일드 컴포넌트 정의
const StyledInput = styled(Input)<ModalInsideContainerProps>`
  background: #d9d9d9;
  border-radius: 30px;
  width: calc(100% - 20px);
  height: ${(props) => props.height || "auto"};
`;

export const ModalInsideGreyInput: React.FC<ModalInsideContainerProps> = ({
  height,
  value,
  placeholder,
  maxLength,
  onChange,
  ...props
}) => {
  return (
    <Box display="flex" flexDir="column" width="100%" alignItems="center">
      {/* 입력 필드 */}
      <StyledInput
        height={height}
        value={value} // 외부에서 전달된 value
        placeholder={placeholder}
        onChange={(e) => {
          if (maxLength && e.target.value.length > maxLength) return; // 최대 글자 수 제한
          if (onChange) onChange(e); // 외부 핸들러 호출
        }}
        {...props}
      />

      {/* 글자 수 표시 */}
      <Flex
        bottom="-20px"
        right="10px"
        fontSize="12px"
        color="#666"
        justifyContent="flex-end"
      >
        {value?.length || 0}
        {maxLength ? ` / ${maxLength}` : ""} {/* 최대 글자 수 표시 */}
      </Flex>
    </Box>
  );
};

export const ModalInsideWhiteContainer = styled.div<ModalInsideContainerProps>`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: calc(100% - 20px);
  height: ${(props) =>
    props.height || "auto"}; // props로 받은 height 또는 기본값
`;

interface ModalTitleProps {
  title: string; // 표시할 제목
}

export const ModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <Text fontSize="32px" color="white">
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
    <Flex justify="center" w="100%" gap="20px">
      <Text color="white" fontSize="24px">
        {text}
      </Text>
      <Box
        backgroundColor="#D2ECF3"
        borderRadius="30px"
        width="60%"
        alignContent="center"
      >
        <Text fontSize="20px" justifySelf="center" color="#007DA4">{nickname}</Text>
      </Box>
    </Flex>
  );
};


export const SelectToppingInsideGreyContainer = styled.div<ModalInsideContainerProps>`
  background: #d9d9d9;
  border-radius: 30px;
  width: calc(100% - 20px);
  height: ${(props) =>
    props.height || "auto"}; // props로 받은 height 또는 기본값
`;
