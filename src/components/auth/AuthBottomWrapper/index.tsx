import { Link as RouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import kakao_icon from "../../../assets/icon/kakao_icon.svg";
import naver_icon from "../../../assets/icon/naver_icon.svg";
import google_icon from "../../../assets/icon/google_icon.png";
export interface AuthBottomWrapperProps {
    linkText: "string",
    linkText2: "string",
    linkTo: "string"
}

// export const AuthBottomWrapper = ({ children }: AuthBottomWrapperProps) => {
export const AuthBottomWrapper = ({linkText, linkText2, linkTo}) => {
  return (
    <Flex flexDir="column" mb="60px" position="fixed" bottom="0">
    <Flex w="100%" justifyContent="center" gap="12px" mb="120px">
    <Button 
    w="70px"
    h="50px" 
    borderRadius="12px" 
    backgroundColor="#FFE812"
    _hover={{
        bg: "#FFE812", // hover 시 배경색
      }}
      _active={{
        transform: "scale(0.95)", // 클릭할 때 버튼 살짝 줄어듦
      }}>
      <img src={kakao_icon} alt="kakao_icon"  style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "contain" }}/>
      </Button>
        <Button 
    w="70px"
    h="50px" 
    borderRadius="12px" 
    backgroundColor="#03E266"
    _hover={{
        bg: "#03E266", // hover 시 배경색
      }}
      _active={{
        transform: "scale(0.95)", // 클릭할 때 버튼 살짝 줄어듦
      }}>
        <img src={naver_icon} alt="naver_icon" />
      </Button>
        <Button 
    w="70px"
    h="50px" 
    borderRadius="12px" 
    backgroundColor="#ffffff"
    _hover={{
        bg: "#ffffff", // hover 시 배경색
      }}
      _active={{
        transform: "scale(0.95)", // 클릭할 때 버튼 살짝 줄어듦
      }}>
        <img src={google_icon} alt="google_icon" />
      </Button>
      </Flex>
      <Flex w="100%" justifyContent="center">
        <Text color="#413C3C" fontSize="14px" marginRight="8px">
          {linkText}
        </Text>
        <ChakraLink
          as={RouterLink}
          to={linkTo}
          color="#0075FF"
          fontSize="14px"
        >
          {linkText2}
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

