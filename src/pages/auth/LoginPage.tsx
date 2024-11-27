import { useState } from "react";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { ToppestText } from "../../components/auth/ToppestText";
import { PasswordInput } from "../../components/auth/PasswordInput";
import { BlueRectangleButton } from "../../components/common/BlueRectangleButton";
import { IvoryInput } from "../../components/common/IvoryInput";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <Wrapper>
      <ToppestText text="로그인하기" color="#03526B" />
      <IvoryInput
        value={email}
        text="이메일"
        handleChange={handleChangeEmail}
        placeholder="이메일을 입력해 주세요"
      />
      <PasswordInput
        value={password}
        text="비밀번호"
        handleChange={handleChangePassword}
        placeholder="비밀번호를 입력해 주세요"
      />
      <ChakraLink as={RouterLink} to="/findpassword" color="#777C89" fontSize="14px" alignSelf="end" margin="0 20px 56px 0" >비밀번호 찾기</ChakraLink>
      <BlueRectangleButton>로그인</BlueRectangleButton>
      </Wrapper>
  );
}


const Wrapper = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;

    `;

