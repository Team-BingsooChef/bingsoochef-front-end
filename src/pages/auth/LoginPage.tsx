import { useState } from "react";
import styled from "@emotion/styled";
import { BlueRectangleButton } from "../../components/common/BlueRectangleButton";
import  { IvoryInput }  from "../../components/common/IvoryInput";
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
      const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };
    return(
        <>
        <IvoryInput           
        value={email}
          text="이메일"
          handleChange={handleChangeEmail}
          placeholder="이메일을 입력해 주세요"/>
                  <IvoryInput           
        value={password}
          text="비밀번호"
          handleChange={handleChangePassword}
          placeholder="비밀번호를 입력해 주세요"/>
        <BlueRectangleButton>로그인</BlueRectangleButton>
        <h1>하이</h1>
        </>
    );
}