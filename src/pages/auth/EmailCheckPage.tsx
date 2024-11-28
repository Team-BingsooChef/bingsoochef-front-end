import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";
import { AuthTopWrapper } from "../../components/auth/AuthWrapper";
import { CodeCheck } from "../../components/auth/CodeCheck";

export default function EmailCheckPage() {
  return (
    <Wrapper>
      <AuthTopWrapper text="인증하기" color="white" />
      <Text color="white" mt="80px">
        이메일 인증을 위한 코드가 발급되었습니다
      </Text>
      <Text color="white">전달받은 코드를 5분 안에 입력해 주세요</Text>
      <CodeCheck />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
