import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
export default function RootLayout(){
    return (
        <Wrapper>
        <Outlet />
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