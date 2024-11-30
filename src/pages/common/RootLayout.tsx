import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { ModalLayout } from '../../components/home/ModalLayout/index';
export default function RootLayout() {
  const location = useLocation();

  // 경로에 따라 배경 이미지 선택
  let backgroundImage;
  if (location.pathname === "/emailcheck") {
    backgroundImage = 'url("/src/assets/background/background_blue.png")';
  } else if (
    ["/setting", "/seetoppinglist", "/search"].includes(location.pathname)
  ) {
    backgroundImage = 'url("/src/assets/background/background_ivory.png")';
  } else {
    backgroundImage = 'url("/src/assets/background/background.png")';
  }

  return (
    <Wrapper>
      <InsideWrapper backgroundImage={backgroundImage}>
        {/* ModalLayout을 전역적으로 추가 */}
        <ModalLayout />
        <Outlet />
      </InsideWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  overflow-y: auto;
  overflow-x: hidden;
`;

const InsideWrapper = styled.div<{ backgroundImage: string }>`
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-size: cover;
  background-position: center;
`;
