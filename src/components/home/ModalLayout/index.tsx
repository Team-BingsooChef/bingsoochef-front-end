import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import { useModalOpenStore } from "../../../store/index";
import { Modal, ModalOverlay, ChakraModalContent as ChakraModalContent} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { ModalContent } from "../ModalContent";
export interface ModalLayoutProps {
  height: string;
}

export const ModalLayout = () => {
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

        <ChakraModalContent
          bg="#61BFBF"
          w="calc(100% - 40px)"
          borderRadius="30px"
          h="60%"
          boxShadow="lg"
        >
          <ModalContent/>
        </ChakraModalContent>
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
