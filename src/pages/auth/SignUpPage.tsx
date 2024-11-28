import styled from "@emotion/styled";
import { BlueRectangleButton } from "../../components/common/BlueRectangleButton";
import { AuthBottomWrapper } from "../../components/auth/AuthBottomWrapper";
import { AuthTopWrapper } from "../../components/auth/AuthTopWrapper";
import { CheckDuplicate } from "../../components/auth/CheckDuplicate";

export default function SignUpPage() {

  return (
    <Wrapper>
       <AuthTopWrapper text="가입하기" color="#03526B"/>
        <CheckDuplicate/>
      <BlueRectangleButton>인증하기</BlueRectangleButton>
      <AuthBottomWrapper linkText="이미 계정이 있으신가요?" linkText2="로그인" linkTo="/login"  />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
