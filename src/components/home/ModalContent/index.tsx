import { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useModalHeightStore } from "../../../store";
import styled from "@emotion/styled";

export const ModalContent = () => {
  const { setHeight, height } = useModalHeightStore();
  useEffect(() => {
    // 현재 컴포넌트의 높이를 설정
    setHeight("70%");
  }, [setHeight]); // 컴포넌트가 렌더링될 때만 실행

  return (
    <>
      <Text>Modal Content</Text>
    </>
  );
};

