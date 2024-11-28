import { useState } from "react";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import { MoveLeft } from "lucide-react";
import { ToppestText } from "../../components/auth/ToppestText";
import { PasswordInput } from "../../components/auth/PasswordInput";
import { BlueRectangleButton } from "../../components/common/BlueRectangleButton";
import { IvoryInput } from "../../components/common/IvoryInput";
import { AuthBottomWrapper } from "../../components/auth/AuthBottomWrapper";
import { AuthTopWrapper } from "../../components/auth/AuthTopWrapper";
export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper>
       <AuthTopWrapper text="로그인하기" color="#03526B"/>
      <IvoryInput
        value={email}
        text="이메일"
        handleChange={handleChangeEmail}
        placeholder="이메일을 입력해 주세요"
      />

      <ChakraLink
        as={RouterLink}
        to="/findpassword"
        color="#777C89"
        fontSize="14px"
        alignSelf="end"
        margin="0 20px 56px 0"
      >
        비밀번호 찾기
      </ChakraLink>
      <BlueRectangleButton>로그인</BlueRectangleButton>
      <AuthBottomWrapper />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
