import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import { useModalOpenStore } from "../../../store/index";
import {
  Modal,
  ModalOverlay,
  ModalContent as ChakraModalContent,
} from "@chakra-ui/react";
import { ModalHeightContext, useModalHeightContext } from "../../../contexts";
import { ModalContent } from "../ModalContent";

export const ModalLayout = () => {
  // export const ModalLayout = () => {
  const { isOpen, onClose } = useModalOpenStore();
  const { height } = useModalHeightContext();
  if (!isOpen) return null;
  //포탈 박스
  const portalElement = document.getElementById("portal");
  // 포탈 박스 없으면 null
  if (!portalElement) return null;
  // 포탈 박스 있으면 이동

  return ReactDOM.createPortal(
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalHeightContext.Provider value={{height}}> 
          <ChakraModalContent
            bg="#61BFBF"
            w="calc(100% - 40px)"
            borderRadius="30px"
            h={height}
            boxShadow="lg"
          >
            <ModalContent />
          </ChakraModalContent>
        </ModalHeightContext.Provider>
      </Modal>
    </>,
    portalElement
  );
};

