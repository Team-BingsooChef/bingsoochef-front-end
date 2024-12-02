import styled from "@emotion/styled";
import { useState } from "react";
import { SettingHeader } from "../../components/user/SettingHeader";
import { GreyInput } from "../../components/user/CustomedInput";
import { Search } from "lucide-react";
import { Flex, Text, Box, VStack, Image } from "@chakra-ui/react";
import { users } from "../../__mocks__/search/data";

export default function SearchPage() {
    const [otherNickname, setOtherNickname] = useState<string>("");

    // 검색 결과 필터링
    const filteredUsers = otherNickname.trim()
        ? users.filter((user) =>
              user.nickname.includes(otherNickname.trim())
          )
        : [];

    return (
        <Wrapper>
            <SettingHeader text="빙수 찾아 떠나기" />
            <Text fontSize="14px" color="#777C89">
                다른 사람들의 빙수를 구경해 보세요!
            </Text>
            <Flex align="center" w="full" gap="8px" mt="20px">
                <Box boxSize="30px">
                    <Search size={24} color="#777C89" />
                </Box>
                <GreyInput
                    value={otherNickname}
                    placeholder="닉네임 검색"
                    handleChange={(e) => setOtherNickname(e.target.value)}
                />
            </Flex>
            {/* 검색 결과 */}
            <VStack align="center" mt="20px" w="full" spacing="8px">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <Flex
                            key={user.userId}
                            p="12px"
                            w="80%"
                            borderWidth="1px"
                            borderRadius="16px"
                            borderColor="#E2E8F0"
                            bg="#F7FAFC"
                            align="center"
                            cursor="pointer"
                        >
                            <Image src={user.profileImg} boxSize="40px" borderRadius="full" objectFit="contain" />
                            <Text ml="8px" fontSize="16px" color="#03526B">
                                {user.nickname}
                            </Text>
                        </Flex>
                    ))
                ) : (
                    otherNickname.trim() && (
                        <Text fontSize="14px" color="#777C89">
                            검색 결과가 없습니다.
                        </Text>
                    )
                )}
            </VStack>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
