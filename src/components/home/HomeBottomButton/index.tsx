import { BlueRectangleButton } from "../../common/CustomedButton";
import { Box } from "@chakra-ui/react";
export const AddTopping = () => {
  return (
    <Box w="calc(100% - 80px)" mt="16px">
      <BlueRectangleButton>토핑 추가하기</BlueRectangleButton>
    </Box>
  );
};

export const CopyLink = () => {
  return (
    <Box w="calc(100% - 80px)" mt="16px">
      <BlueRectangleButton>공유하기</BlueRectangleButton>
    </Box>
  );
};
