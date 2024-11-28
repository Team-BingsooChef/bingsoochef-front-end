import { useLocation } from "react-router-dom";
export default function SetPasswordPage()   {
    const location = useLocation();
    const to = location.state?.to || "unknown"; // 기본값 설정
    console.log(to);
    return(
        <>
        reset
        </>
    );
}