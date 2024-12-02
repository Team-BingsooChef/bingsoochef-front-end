import styled from "@emotion/styled";
import { useState } from "react";
import { SettingHeader } from "../../components/user/SettingHeader";
import { GreyInput } from "../../components/user/CustomedInput";
import { Search } from "lucide-react";
import { Flex, Text, Box } from "@chakra-ui/react";
export default function SearchPage() {
    const [otherNickname, setOtherNickname] = useState<string>("");
    return(
        <Wrapper>
            <SettingHeader text="빙수 찾아 떠나기" />
            <Text fontSize="14px" color="#777C89">다른 사람들의 빙수를 구경해 보세요!</Text>
            <Flex align="center" w="full" gap="8px" mt="20px">
                <Box boxSize="30px">
            <Search size={24} color="#777C89"/>
            </Box>
        <GreyInput value={otherNickname} placeholder="닉네임 검색" handleChange={(e) => setOtherNickname(e.target.value)} />
        </Flex>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
