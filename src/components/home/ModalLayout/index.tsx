import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { useModalOpenStore } from '../../../store/index';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image } from "@chakra-ui/react";

export interface ModalLayoutProps {
    height: string;
    children?: React.ReactNode;
}

export const ModalLayout = ({height, children}: ModalLayoutProps) => {
// export const ModalLayout = () => {
    const {isOpen, onClose} = useModalOpenStore();
   

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
                <ModalContent>
                {children}
                </ModalContent>
            </Modal>
        </>,
        portalElement
  );
}