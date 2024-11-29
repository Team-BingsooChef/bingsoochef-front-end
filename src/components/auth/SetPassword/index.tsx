import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { ToppestText } from "../ToppestText";
import { PasswordInput } from "../PasswordInput";
import { BlueRectangleButton } from "../../common/CustomedButton";
import { useToast, Box } from "@chakra-ui/react";

export const SetPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 두 번째 비밀번호

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 동일하지 않습니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // 비밀번호가 동일한 경우 로직
    toast({
      title: "비밀번호가 설정되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // 다음 단계로 이동 로직 추가
    navigate("/aftersignup");
  };

  return (
    <>
      <Box margin="40px 0 80px 0">
        <ToppestText text="비밀번호 변경" color="#03526B" />
      </Box>
      <PasswordInput
        value={password}
        text="비밀번호"
        placeholder="10~15자, 특수문자 포함"
        handleChange={(e) => setPassword(e.target.value)}
      />
      <PasswordInput
        value={confirmPassword}
        text="비밀번호 확인"
        placeholder="비밀번호를 한 번 더 입력해 주세요"
        handleChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Box w="100%" mt="160px">
        <BlueRectangleButton onClick={handleSubmit}>
          변경하기
        </BlueRectangleButton>
      </Box>
    </>
  );
};
export const ReSetPassword = () => {
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 두 번째 비밀번호

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 동일하지 않습니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // 비밀번호가 동일한 경우 로직
    toast({
      title: "비밀번호가 재설정되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // 다음 단계로 이동 로직 추가
  };

  return (
    <>
      <Box margin="40px 0 80px 0">
        <ToppestText text="가입하기" color="#03526B" />
      </Box>
      <PasswordInput
        value={password}
        text="비밀번호"
        placeholder="10~15자, 특수문자 포함"
        handleChange={(e) => setPassword(e.target.value)}
      />
      <PasswordInput
        value={confirmPassword}
        text="비밀번호 확인"
        placeholder="비밀번호를 한 번 더 입력해 주세요"
        handleChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Box w="100%" mt="140px">
        <BlueRectangleButton onClick={handleSubmit}>
          다음으로
        </BlueRectangleButton>
      </Box>
    </>
  );
};
