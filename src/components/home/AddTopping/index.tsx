import { useModalHeight } from "../../../hook/useModalHeight";
import {
  ModalInsideGreyContainer,
  ModalInsideGreyInput,
  ModalTitle,
  LetterTopInfo,
} from "../ModalCustomedElement";
import { toppingTypesData } from "../../../__mocks__/toppingtypes/data";
import { Flex, Image, Box, Grid, GridItem, Text } from "@chakra-ui/react";


const fruits = toppingTypesData.filter(
  (item) => item.toppingTypeCategory === "fruits"
);
const snacks = toppingTypesData.filter(
  (item) => item.toppingTypeCategory === "snacks"
);
const ricecakes = toppingTypesData.filter(
  (item) => item.toppingTypeCategory === "ricecakes"
);


export const SelectTopping = () => {
  useModalHeight("70%"); // SelectTopping에 맞는 높이 설정

  return <>
  <ModalTitle title="토핑 선택"/>
  <ModalInsideGreyContainer height="70%">
    <Flex flexDir="column"m="0 10px 0 10px">
          {/* Fruits 카테고리 */}
          <Text  mt="16px">- 과일 </Text>
         <Grid templateColumns='repeat(6, 1fr)' gap="16px" overflowX="auto" whiteSpace= "nowrap" alignItems="center">
            {fruits.map((item) => (
                <GridItem boxSize="90px" background="white" borderRadius="20px" display="flex" justifyContent="center" alignItems="center" >
              <Image
                key={item.toppingTypeId}
                src={item.defrostedImg}
                alt={item.toppingTypeName}
              boxSize="70px"
              />
              </GridItem>
            ))}
       </Grid>

          {/* Snacks 카테고리 */}
          <Text  mt="16px">- 과자 </Text>
          <Grid templateColumns='repeat(6, 1fr)' gap="16px" overflowX="auto" whiteSpace= "nowrap" alignItems="center">
            {snacks.map((item) => (
          <GridItem boxSize="90px" background="white" borderRadius="20px" display="flex" justifyContent="center" alignItems="center" >
              <Image
                key={item.toppingTypeId}
                src={item.defrostedImg}
                alt={item.toppingTypeName}
              boxSize="70px"
              />
              </GridItem>
            ))}
       </Grid>

          {/* Ricecakes 카테고리 */}
          <Text  mt="16px">- 떡 </Text>
          <Grid 
          templateColumns='repeat(6, 1fr)' 
          gap="16px" 
          overflowX="auto" 
          whiteSpace= "nowrap" 
          alignItems="center"
          >
            {ricecakes.map((item) => (
              <GridItem boxSize="90px" background="white" borderRadius="20px" display="flex" justifyContent="center" alignItems="center" >
              <Image
                key={item.toppingTypeId}
                src={item.defrostedImg}
                alt={item.toppingTypeName}
              boxSize="70px"
              />
              </GridItem>
            ))}
       </Grid>
       </Flex>
  </ModalInsideGreyContainer>
  </>
};

export const WriteMessage = () => {
  return <div>Write</div>;
};

export const QuizOrNot = () => {
  return <div>Quiz or Not</div>;
};

export const SelectQuizType = () => {
  return <div>Select Quiz Type</div>;
};

export const MakeQuizChoice = () => {
  return <div>Make Quiz of Multiple</div>;
};

export const SetChefName = () => {
  return <div>Set Chef Name</div>;
};
