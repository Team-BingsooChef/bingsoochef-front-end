import { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useModalHeightStore } from "../../../store";
import styled from "@emotion/styled";

export const ModalContent = () => {
  const { setHeight, height } = useModalHeightStore();
  useEffect(() => {
    // 현재 컴포넌트의 높이를 설정
    setHeight("50%");
  }, [setHeight]); // 컴포넌트가 렌더링될 때만 실행

  return (
    <ModalWrapper style={{ height: height }}>
      <Text>Modal Content</Text>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  background-color: "#61BFBF";
  width: 100%;
  border-radius: 30px;
  box-shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)";
`;
