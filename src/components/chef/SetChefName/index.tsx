import styled from "@emotion/styled";
import { useCreateToppingStore } from "../../../store/api/topping";
import { useModalHeight } from "../../../hook/useModalHeight";
import { useModalOpenStore } from "../../../store/modal";


import { Text, Box, Input, Image } from "@chakra-ui/react";
import { BlueEllipseButton } from "../../common/CustomedButton";
import { toppingTypesData } from '../../../__mocks__/toppingtypes/data';


export const SetChefName = () => {
    const {onClose} = useModalOpenStore();
    const {requestBody, setChefName} = useCreateToppingStore();
    useModalHeight("28%");

     // 선택된 toppingTypeId 가져오기
  const selectedTopping = toppingTypesData.find(
    (topping) => topping.toppingTypeId === requestBody.toppingTypeId
  );
  
    return (
        <>
        <Text color="white" fontSize="24px">
          표시될 셰프님의 이름을 적어주세요
        </Text>
        <ChefNameInputContainer>
          {selectedTopping && (
            <Image
              src={selectedTopping.defrostedImg}
              alt={selectedTopping.toppingTypeName}
              boxSize="50px"
              position="absolute"
              right="0px"
              top="-20px"
              zIndex={10}
            />
          )}
          <ChefNameInput
            placeholder=""
            onChange={(e) => setChefName(e.target.value)}
            value={requestBody.topping.chefName}
          />
          <Text mr="50px">셰프님</Text>
        </ChefNameInputContainer>
        <Box w="calc(100% - 200px)" mt="20px" mb="10px">
          <BlueEllipseButton onClick={onClose}>토핑 추가 완료</BlueEllipseButton>
        </Box>
      </>
    );
  };
  
// ChefNameInput을 감싸는 스타일드 컴포넌트
const ChefNameInputContainer = styled(Box)`
  position: relative;
  width: calc(100% - 20px);
  margin-top: 10px;
  border-radius: 70px;
  background: white;
  display: flex;
  align-items: center;
`;

const ChefNameInput = styled(Input)`
  flex: 1;
  border-radius: 70px;
  height: 60px;
  padding-left: 60px; // 아이콘 공간 확보
  background: white;
  border: none;
  font-size: 32px;
  &:focus {
    border: none;
    box-shadow: none; // Chakra UI는 기본적으로 focus 시 box-shadow가 추가됩니다.
  }
`;