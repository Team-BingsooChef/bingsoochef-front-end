import styled from "@emotion/styled";
import { Box, useToast } from "@chakra-ui/react";
import { SettingHeader } from "../../components/user/SettingHeader";
import { BlueRectangleButton } from "../../components/common/CustomedButton";
import { SelectBingsooFlavor } from "../../components/auth/SelectBingsooFlavor";
import { useNavigate } from 'react-router-dom';


export default function ChangeFlavorPage() {
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {

    toast({
      title: "빙수 맛이 변경되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    navigate("/");
  }
  return (
    <Wrapper>
        <Box w="full" mb="60px">
        <SettingHeader text="빙수 맛 변경하기" />
        </Box>
      <SelectBingsooFlavor />
      <Box mt="40px" w="100%">
      <BlueRectangleButton onClick={handleSubmit}>완료</BlueRectangleButton>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
