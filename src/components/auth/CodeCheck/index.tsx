import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { LightBlueRectangleButton } from "../../common/CustomedButton";

export const CodeCheck = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 300초 = 5분
  const [timeExpired, setTimeExpired] = useState(false);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

 // 이전 페이지 정보 확인
 const from = location.state?.from || "unknown"; // 기본값 설정
  // 타이머 로직
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setTimeExpired(true);
      toast({
        title: "입력 시간이 끝났습니다.",
        description: "다시 메일을 전송할까요?",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [timeLeft, toast]);

  // 포맷된 타이머 출력
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}분 ${secs < 10 ? `0${secs}` : secs}초`;
  };

  // 입력 필드 변경 핸들러
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.slice(0, 1); // 한 글자만 허용
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // 다음 입력 필드로 이동
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // 백스페이스 핸들러
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !code[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // 인증 코드 제출
  const handleSubmit = () => {
    if (code.join("") === "123456") {
      toast({
        title: "인증되었습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
     if (from === "signup") {
      navigate("/setpassword", { state: { to: "setpassword" } });
    } else if (from === "findpassword") {
      navigate("/setpassword", { state: { to: "resetpassword" } });
    } else {
      console.error("Unknown navigation source");
    }
    } else {
      toast({
        title: "인증 번호가 틀렸습니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // 인증 코드 재전송
  const handleResend = () => {
    toast({
      title: "인증 코드를 다시 전송했습니다.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    setTimeLeft(300); // 타이머 리셋
    setTimeExpired(false); // 만료 상태 초기화
  };

  return (
    <CodeCheckWrapper>
      <InputsContainer>
        {code.map((_, index) => (
          <CodeInput
            key={index}
            type="text"
            maxLength={1}
            value={code[index]}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el!)} // ref 배열에 추가
          />
        ))}
      </InputsContainer>
      <Text color="white" mt="40px">
        코드 입력까지 {formatTime(timeLeft)} 남았습니다
      </Text>
      {timeExpired && (
        <ResendButton onClick={handleResend}>다시 전송</ResendButton>
      )}
      <Box mt="120px" w="100%">
        <LightBlueRectangleButton onClick={handleSubmit}>
          인증하기
        </LightBlueRectangleButton>
      </Box>
      </CodeCheckWrapper>
  );
};

const CodeCheckWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const CodeInput = styled.input`
  width: 52px;
  height: 52px;
  text-align: center;
  font-size: 24px;
  border-radius: 8px;
  border: 1px solid #007da4;
  background-color: #007da4;
  color: #ffffff;
`;

const ResendButton = styled.button`
  background-color: transparent;
  border: none;
  color: #2589ff;
  text-decoration: underline;
  cursor: pointer;
`;
