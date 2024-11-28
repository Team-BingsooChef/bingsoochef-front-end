import { ToppestText } from "../ToppestText";
import { Flex, Box, Button } from "@chakra-ui/react";
import { MoveLeft } from "lucide-react";
import { MouseEventHandler } from 'react';

export interface AuthTopWrapperProps {
  text?: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const goBack = () => {
  window.history.go(-1); // 뒤로 가기
};


export const AuthTopWrapper = ({ text, color }: AuthTopWrapperProps) => {
  return (
    <Flex w="100%" mt="40px" position="relative" >
        <Box>
        <Button m="0" 
        p="0" 
        bg="none" 
        _hover= {{bg:"none"}} 
        onClick={goBack}
        width="28px" // 아이콘의 너비와 동일하게 설정
        height="28px" // 아이콘의 높이와 동일하게 설정
        display="flex" // 아이콘을 버튼 안에 중앙 정렬
        alignItems="center"
        justifyContent="center">
      <MoveLeft size={28} color={color} />
      </Button>
      </Box>
      <Box position="absolute" right="calc((100% - 60px) / 2)" >
      <ToppestText text={text} color={color} />
      </Box>
    </Flex>
  );
};
