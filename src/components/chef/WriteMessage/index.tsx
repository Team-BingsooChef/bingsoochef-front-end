import { useModalHeight } from "../../../hook/useModalHeight";
import { useModalStateStore } from "../../../store/modal";
import { useCreateToppingStore } from "../../../store/api/topping";
import { BlueEllipseButton } from "../../common/CustomedButton";
import {
  ModalInsideGreyInput,
  ModalTitle,
  LetterTopInfo
} from "../../home/ModalCustomedElement";
import { Flex, Box } from "@chakra-ui/react";


export const WriteMessage = () => {

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
    <Flex w="100%" h="70%" >
    <ModalInsideGreyInput
      value={requestBody.topping.toppingContent}
      height="100%"
      placeholder=""
      maxLength={300} // 최대 글자 수 50자로 제한
      onChange={(e) => setToppingContent(e.target.value)}
    />
    </Flex>
    <Box w="calc(100% - 200px)" mt="10px" mb="30px" >
    <BlueEllipseButton onClick={clickNext}>다음</BlueEllipseButton>
    </Box>
  </>);
};
