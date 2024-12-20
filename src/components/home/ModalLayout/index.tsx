import ReactDOM from "react-dom";
import { useModalOpenStore, useModalHeightStore } from "../../../store/modal";
import { ModalContent } from "../ModalContent";
import { useModalStateStore } from "../../../store/modal";
import styled from "@emotion/styled";


export const ModalLayout = () => {
  const { isOpen, onClose } = useModalOpenStore();
  const { height } = useModalHeightStore();
  const { setModalState } = useModalStateStore();
  if (!isOpen) return null;
   
  const clickOutside =() => {
    onClose();
    setModalState("");
    
  }
  // 포탈 박스
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;
  return ReactDOM.createPortal(
    <Overlay onClick={clickOutside}>
      <ModalWrapper>
        <ModalContainer
          onClick={(e) => e.stopPropagation()}
          style={{ height: height }}
        >
          <ModalContent />
        </ModalContainer>
      </ModalWrapper>
    </Overlay>,
    portalElement
  );
};

// 오버레이 스타일
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

// 모달 컨테이너 스타일
const ModalWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ModalContainer = styled.div`
  margin-top: 100px;
  background: #61bfbf;
  width: calc(100% - 40px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
