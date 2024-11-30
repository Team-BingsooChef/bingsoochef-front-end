import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import { useModalOpenStore } from "../../../store/index";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
export interface ModalLayoutProps {
  height: string;
  children?: React.ReactNode;
}

export const ModalLayout = ({ height, children }: ModalLayoutProps) => {
  // export const ModalLayout = () => {
  const { isOpen, onClose } = useModalOpenStore();

  if (!isOpen) return null;
  //포탈 박스
  const portalElement = document.getElementById("portal");
  // 포탈 박스 없으면 null
  if (!portalElement) return null;
  // 포탈 박스 있으면 이동
  return ReactDOM.createPortal(
    <Wrapper>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          bg="#61BFBF"
          w="calc(100% - 40px)"
          borderRadius="30px"
          h="60%"
          boxShadow="lg"
        >
          {children}
        </ModalContent>
      </Modal>
    </Wrapper>,
    portalElement
  );
};

const Wrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
