import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
export default function RootLayout() {
  return (
    <Wrapper>
      <InsideWrapper>
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
`;

const InsideWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/src/assets/background.png");
  background-size: cover;
`;
