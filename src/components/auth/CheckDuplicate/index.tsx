import { Flex, Box, Button, Input, Text } from "@chakra-ui/react";
import { useState, MouseEventHandler } from "react";
// import { useState, MouseEventHandler } from "react";

interface CheckDuplicateProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
}

// export const CheckDuplicate: React.FC<CheckDuplicateProps> = ({ onClick }) => {
export const CheckDuplicate = () => {
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Box w="100%" mt="100px">
      <Text mb="8px" color="#03526B" fontWeight="100" alignSelf="start">
        이메일
      </Text>
      <Flex gap="5px">
        <Input
          variant="filled"
          value={email}
          onChange={handleChangeEmail}
          placeholder="이메일을 입력해 주세요"
          _placeholder={{ opacity: 1, color: "gray.500" }}
          size="sm"
          width={"100%"}
          height="60px"
          borderRadius="16px"
          backgroundColor="#FDF0CC"
          mb="24px"
          _hover={{ backgroundColor: "#FDF0CC" }} // Keeps the background white on hover
          _focus={{ backgroundColor: "#FDF0CC", boxShadow: "none" }} // Keeps the background white on focus
        />
        <CheckDuplicateButton />
      </Flex>
    </Box>
  );
};

const CheckDuplicateButton: React.FC<CheckDuplicateProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick} // onClick 이벤트 연결
      bg="#61BFBF"
      color="#ffffff"
      width="80px"
      fontSize="12px"
      fontWeight={500}
      height="60px"
      borderRadius="16px"
      _hover={{
        bg: "#61BFBF", // hover 시 배경색
        color: "#ffffff", // hover 시 텍스트 색상 유지
      }}
      _active={{
        transform: "scale(0.98)", // 클릭할 때 버튼 살짝 줄어듦
      }}
    >
      중복 확인
    </Button>
  );
};
