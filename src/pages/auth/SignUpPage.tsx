import { useState } from "react";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink, Box } from "@chakra-ui/react";
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
       <AuthTopWrapper text="가입하기" color="#03526B"/>
       <Box width= "100%" mt="100px">
      <IvoryInput
        value={email}
        text="이메일"
        handleChange={handleChangeEmail}
        placeholder="이메일을 입력해 주세요"
      />
    </Box>
      <BlueRectangleButton>인증하기</BlueRectangleButton>
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
