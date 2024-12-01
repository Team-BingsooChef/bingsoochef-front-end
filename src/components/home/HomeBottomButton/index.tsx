import { BlueRectangleButton } from "../../common/CustomedButton";
import { Box } from "@chakra-ui/react";
import { useModalOpenStore } from "../../../store/modal";
import { useModalStateStore } from "../../../store/modal";

export const AddToppingButton = () => {
  const { onOpen } = useModalOpenStore();
  const { setModalState } = useModalStateStore();
  const clickAddTopping = () => {
    setModalState("selectTopping");
    onOpen();
  };
  return (
    <Box w="calc(100% - 80px)" mt="16px">
      <BlueRectangleButton onClick={clickAddTopping}>토핑 추가하기</BlueRectangleButton>
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
