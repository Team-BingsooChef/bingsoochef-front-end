import { useState } from "react";
import styled from "@emotion/styled";
import { Box, useToast } from "@chakra-ui/react";
import { IvoryInput } from "../../components/common/CustomedInput";
import { BlueRectangleButton } from "../../components/common/CustomedButton";
import { SelectBingsooFlavor } from "../../components/auth/SelectBingsooFlavor";
import { useNavigate } from 'react-router-dom';

export default function AfterSignUpPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    if (!username) {
      toast({
        title: "닉네임을 입력해주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "환영합니다!",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    navigate("/");
  }
  return (
    <Wrapper>
      <Box marginTop="80px" w="100%">
        <IvoryInput
          value={username}
          text="당신을 뭐라고 부를까요?"
          placeholder="8지 내로 닉네임을 설정해 주세요"
          handleChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <SelectBingsooFlavor />
      <Box mt="40px" w="100%">
      <BlueRectangleButton onClick={handleSubmit}>완료</BlueRectangleButton>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
