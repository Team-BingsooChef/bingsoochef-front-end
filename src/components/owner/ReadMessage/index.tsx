import { useModalHeight } from "../../../hook/useModalHeight";
import { useModalStateStore } from "../../../store/modal";
import { useCreateToppingStore } from "../../../store/api/topping";
import { BlueEllipseButton } from "../../common/CustomedButton";
import {
  ModalInsideWhiteContainer,
  ModalTitle,
  LetterTopInfo
} from "../../home/ModalCustomedElement";
import { Flex, Box } from "@chakra-ui/react";


export const ReadMessage = () => {

  useModalHeight("70%"); // SelectTopping에 맞는 높이 설정
  const { requestBody, setToppingContent } = useCreateToppingStore();
  const { setModalState } = useModalStateStore();

const clickNext = () => {
    setModalState("quizOrNot");
  };

  return(
  <>
    <Box mt="20px">
    <ModalTitle title="토핑 작성" />
    </Box>
    <Box w="100%" m="10px 0 20px 0">
    <LetterTopInfo text="To" nickname="희연"/>
    </Box>
    <Flex w="100%" h="70%" justify="center">
<ModalInsideWhiteContainer>
  </ModalInsideWhiteContainer>
    </Flex>
    <Box w="calc(100% - 200px)" mt="10px" mb="30px" >
    <BlueEllipseButton onClick={clickNext}>다음</BlueEllipseButton>
    </Box>
  </>);
};
