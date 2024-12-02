import {
  ModalTitle,
  SelectToppingInsideGreyContainer,
} from "../../home/ModalCustomedElement";
import { toppingTypesData } from "../../../__mocks__/toppingtypes/data";
import { Flex, Image, Grid, GridItem, Text, Box } from "@chakra-ui/react";
import { useModalHeight } from "../../../hook/useModalHeight";
import { useCreateToppingStore } from "../../../store/api/topping";
import { useModalStateStore } from "../../../store/modal";

export const SelectTopping = () => {
  useModalHeight("64%"); // SelectTopping에 맞는 높이 설정
  const fruits = toppingTypesData.filter(
    (item) => item.toppingTypeCategory === "fruits"
  );
  const snacks = toppingTypesData.filter(
    (item) => item.toppingTypeCategory === "snacks"
  );
  const ricecakes = toppingTypesData.filter(
    (item) => item.toppingTypeCategory === "ricecakes"
  );

  const { setModalState } = useModalStateStore();
  const { setToppingTypeId } = useCreateToppingStore();

  const clickTopping = (toppingTypeId: number) => {
    setToppingTypeId(toppingTypeId);
    setModalState("writeMessage");
  };

  return (
    <>
      <Box mb="24px">
      <ModalTitle title="토핑 선택" />
      </Box>
      <SelectToppingInsideGreyContainer height="80%">
        <Flex flexDir="column" m="0 10px 0 10px">
          {/* Fruits 카테고리 */}
          <Text mt="16px">- 과일 </Text>
          <Grid
            templateColumns="repeat(6, 1fr)"
            gap="16px"
            overflowX="auto"
            whiteSpace="nowrap"
            alignItems="center"
          >
            {fruits.map((item) => (
              <GridItem
                boxSize="90px"
                background="white"
                borderRadius="20px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => clickTopping(item.toppingTypeId)}
              >
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
          <Text mt="16px">- 과자 </Text>
          <Grid
            templateColumns="repeat(6, 1fr)"
            gap="16px"
            overflowX="auto"
            whiteSpace="nowrap"
            alignItems="center"
          >
            {snacks.map((item) => (
              <GridItem
                boxSize="90px"
                background="white"
                borderRadius="20px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => clickTopping(item.toppingTypeId)}
              >
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
          <Text mt="16px">- 떡 </Text>
          <Grid
            templateColumns="repeat(6, 1fr)"
            gap="16px"
            overflowX="auto"
            whiteSpace="nowrap"
            alignItems="center"
          >
            {ricecakes.map((item) => (
              <GridItem
                boxSize="90px"
                background="white"
                borderRadius="20px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => clickTopping(item.toppingTypeId)}
              >
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
      </SelectToppingInsideGreyContainer>
    </>
  );
};
