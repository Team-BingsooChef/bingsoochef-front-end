import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { useModalOpenStore } from "../../../store/index";

export const ModalLayout = () => {
  const { isOpen, onClose } = useModalOpenStore();
  if (!isOpen) return null;

  // 포탈 박스
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalWrapper >
        <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <div>
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
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
  border-radius: 30px;
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ModalContainer = styled.div`
  background: #61BFBF;
  height: 50%;
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;

`;
// 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

