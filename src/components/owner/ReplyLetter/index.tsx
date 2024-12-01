import { useState } from "react";
import { useModalHeight } from "../../../hook/useModalHeight";
import { useModalStateStore, useModalOpenStore } from "../../../store/modal";
import { useCreateToppingStore } from "../../../store/api/topping";
import { BlueEllipseButton } from "../../common/CustomedButton";
import {
  ModalInsideGreyInput,
  ModalTitle,
  LetterTopInfo
} from "../../home/ModalCustomedElement";
import { Flex, Box, useToast } from "@chakra-ui/react";


export const ReplyLetter = () => {

  useModalHeight("48%"); // SelectTopping에 맞는 높이 설정
  const { setModalState } = useModalStateStore();
  const { onClose } = useModalOpenStore();
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();
const clickNext = () => {
    if (inputValue === "") {
      toast({
        title: "답장 내용을 입력해주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "답장이 작성되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
    setModalState("");
    
  };

  return(
  <>
    <Box mt="20px">
    <ModalTitle title="답장 작성" />
    </Box>
    <Box w="100%" m="10px 0 20px 0">
    <LetterTopInfo text="To" nickname="희연"/>
    </Box>
    <Flex w="100%" h="70%" >
    <ModalInsideGreyInput
      value={inputValue}
      height="100%"
      placeholder=""
      maxLength={30} // 최대 글자 수 50자로 제한
      onChange={(e) => setInputValue(e.target.value)}
    />
    </Flex>
    <Box w="calc(100% - 200px)" mt="10px" mb="30px" >
    <BlueEllipseButton onClick={clickNext}>완료</BlueEllipseButton>
    </Box>
  </>);
};
