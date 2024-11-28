import { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { IvoryInput } from "../../components/common/CustomedInput";
import { BlueRectangleButton } from "../../components/common/CustomedButton";
import { SelectBingsooFlavor } from "../../components/auth/SelectBingsooFlavor";

export default function AfterSignUpPage() {

  const [username, setUsername] = useState("");

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
      <BlueRectangleButton>완료</BlueRectangleButton>
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
