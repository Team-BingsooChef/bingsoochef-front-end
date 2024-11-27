import styled from "@emotion/styled";
import { BlueRectangleButton } from "../../components/common/BlueRectangleButton";
import { IvoryInput } from "../../components/common/IvoryInput";
import { Button } from "@chakra-ui/react";
export default function LoginPage() {

    return(
        <>
        <IvoryInput           
        value={email}
          text="이메일"
          handleChange={handleChangeEmail}
          placeholder="이메일을 입력해주세요."" />
        <BlueRectangleButton>로그인</BlueRectangleButton>
        <h1>하이</h1>
        </>
    );
}