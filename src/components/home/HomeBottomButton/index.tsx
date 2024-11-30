import { BlueRectangleButton } from "../../common/CustomedButton";
import { Box } from "@chakra-ui/react";
import { useModalOpenStore } from "../../../store";

export const AddToppingButton = () => {
  const { onOpen } = useModalOpenStore();
  return (
    <Box w="calc(100% - 80px)" mt="16px">
      <BlueRectangleButton onClick={onOpen}>토핑 추가하기</BlueRectangleButton>
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
