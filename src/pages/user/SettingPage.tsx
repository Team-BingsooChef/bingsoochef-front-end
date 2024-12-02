import styled from "@emotion/styled";
import { useState } from "react";
import { SettingHeader } from "../../components/user/SettingHeader";
import { GreyInput, PasswordInput } from "../../components/user/CustomedInput";
import { Text, Flex, Box, Image, Divider } from "@chakra-ui/react";
import { BlueEllipseButton } from "../../components/common/CustomedButton";


export default function SettingPage() {
  const [currentNickname, setCurrentNickname] = useState<string>("호랭이");
  const [changedNickname, setChangedNickname] = useState<string>("");
  const [changedPassword, setChangedPassword] = useState<string>("");

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedNickname(e.target.value);
  };

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedPassword(e.target.value);
  };

  // 상태를 나타내는 타입
type SearchStatus = "허용" | "금지";

const [accessStatus, setAccessStatus] = useState<SearchStatus>("금지");

const toggleAccess = () => {
  setAccessStatus((prev) => (prev === "허용" ? "금지" : "허용"));
};

  return (
    <Wrapper>
      <SettingHeader text="계정 설정" />
      <Flex align="center" justify="space-between" w="full" mt="70px">
        <Flex align="center" gap="4px">
        <Text fontSize="24px" color="#1581A3">{currentNickname}</Text>
        <Text fontSize="20px" color="black">님</Text>
        </Flex>
        <Flex align="center" gap="8px">
        <Box>
          <Image
            src="/src/assets/profile_example.jpg"
            alt="profile"
            width="50px"
            height="50px"
            borderRadius="full"
            objectFit="contain"
          />
        </Box>
        <GreyTextButton>사진 변경</GreyTextButton>
        </Flex>
      </Flex>

      <Divider my="8px" borderColor="gray.400" borderWidth="1px" />

        <Box w="full" m="10px 0 10px 0">
        <FlexChangeElement text1="닉네임" text2="변경" onClick={() => setCurrentNickname(changedNickname)} />
        </Box>
      <GreyInput
        value={changedNickname}
        handleChange={handleNicknameChange} // 닉네임 핸들러 연결
        placeholder="닉네임"
      />
         <Box w="full" m="10px 0 10px 0">
        <FlexChangeElement text1="비밀번호" text2="변경" onClick={() => setCurrentNickname(changedNickname)} />
        </Box>
      <PasswordInput
        value={changedPassword}
        handleChange={handlePasswordChange} // 비밀번호 핸들러 연결
        placeholder="비밀번호"
      />

      <Divider my="8px" borderColor="gray.400" borderWidth="1px"  />
      <Box m="10px 0 10px 0" w="full">
      <FlexChangeElement text1="내 빙수 검색 허용" text2={accessStatus} onClick={toggleAccess} />

      </Box>
      <Divider my="8px" borderColor="gray.400" borderWidth="1px"/>
        <Flex gap="20px" mt="200px">
      <BlueEllipseButton>로그아웃</BlueEllipseButton>
      <BlueEllipseButton>회원 탈퇴</BlueEllipseButton>
      </Flex>
    </Wrapper>
  );
};

const GreyTextButton = styled(Text)`
  font-size: 14px;
  text-decoration: underline;
  color: #777c89;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


interface FlexChangeElementProps {
    text1: string;
    text2: string;
    onClick: () => void;
}

const FlexChangeElement = ({text1,text2, onClick}: FlexChangeElementProps ) =>
{
    return(
        <Flex justify="space-between" align="center" w="100%">
    <Text color="#03526B">{text1}</Text>
    <GreyTextButton onClick={onClick}>{text2}</GreyTextButton>
    </Flex>
    );
}

