import styled from "@emotion/styled";
import { useNavigate, navigate } from "react-router-dom";
import { BlueRectangleButton } from "../../components/common/CustomedButton";
import {
  AuthTopWrapper,
  AuthBottomWrapper,
} from "../../components/auth/AuthWrapper";
import { CheckDuplicate } from "../../components/auth/CheckDuplicate";

export default function SignUpPage() {
  const navigate = useNavigate();
  const goToEmailCheck = () => {
    navigate("/emailcheck");
  };

  return (
    <Wrapper>
      <AuthTopWrapper text="가입하기" color="#03526B" />
      <CheckDuplicate />
      <BlueRectangleButton onClick={goToEmailCheck}>
        인증하기
      </BlueRectangleButton>
      <AuthBottomWrapper
        linkText="이미 계정이 있으신가요?"
        linkText2="로그인"
        linkTo="/login"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
