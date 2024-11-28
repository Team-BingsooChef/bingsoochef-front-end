import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { SetPassword, ReSetPassword } from "../../components/auth/SetPassword";

export default function SetPasswordPage()   {

    const location = useLocation();
    const to = location.state?.to || "unknown"; // 기본값 설정
    return(
        <Wrapper>
            {to === "findpassword" ? <ReSetPassword /> : <SetPassword />}
        </Wrapper>
        
    );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
