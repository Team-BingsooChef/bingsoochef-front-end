import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { AuthTopWrapper } from "../../components/auth/AuthWrapper";
import { IvoryInput } from "../../components/common/CustomedInput";
import { BlueRectangleButton } from "../../components/common/CustomedButton";

export default function FindPasswordPage() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const goToEmailCheck = () => {
    navigate("/emailcheck", { state: { from: "findpassword" } });
  };
  return (
    <Wrapper>
      <AuthTopWrapper text="비밀번호 찾기" color="#03526B"  />
      <Box mt="120px" mb="40px" w="100%">
      <IvoryInput
        value={email}
        text="비밀번호를 찾고자 하는 이메일을 입력해 주세요"
        handleChange={handleChangeEmail}
        placeholder="이메일을 입력해 주세요"
      />
      </Box>
      <BlueRectangleButton onClick={goToEmailCheck}>다음</BlueRectangleButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
