import { useModalHeight } from "../../../hook/useModalHeight";
import { useModalOpenStore, useModalStateStore } from "../../../store/modal";
import {
  useSelectedToppingStore,
  useCreateToppingStore,
} from "../../../store/api/topping";
import { BlueEllipseButton } from "../../common/CustomedButton";
import {
  ModalInsideWhiteContainer,
  ModalTitle,
  LetterTopInfo,
} from "../../home/ModalCustomedElement";
import { Flex, Box, Text } from "@chakra-ui/react";

export const ReadMessage = () => {
  useModalHeight("70%"); // SelectTopping에 맞는 높이 설정

  const { setModalState } = useModalStateStore();
  const { onClose } = useModalOpenStore();
  const { selectedToppingId } = useSelectedToppingStore();

  //toppingId랑 userId 가지고 api한테 요청

  // comment 여부 확인
  // 일단은 답장 안 적었을 때 기준으로
  //  const hasComment = data.comment !== null && data.comment.commentContent;

  const clickClose = () => {
    setModalState("");
    onClose();
  };

  const clickReply = () => {
    setModalState("replyLetter");
  };

  // const viewReply = () => {
  //   setModalState("viewReply");
  // };
  return (
    <>
      <Box w="100%" m="0 0 20px 0">
        <LetterTopInfo text="From" nickname="희연" />
      </Box>
      <Flex w="100%" h="60%" justify="center">
        <ModalInsideWhiteContainer height="100%">
          <Text> 정신 차려보니까 개발한 지 7시간이 훌쩍 지났어 ;</Text>
        </ModalInsideWhiteContainer>
      </Flex>

      <Flex color="gray.500" fontSize="16px" mt="24px" gap="7px">
        <Text>답장을 남기지 않았어요.</Text>
        <Text 
        textDecoration="underline"
        cursor="pointer"
        onClick={clickReply}
        >답장 남기기</Text>
      </Flex>
      {/* 답장 여부 메시지 */}
      {/* <Box w="100%" textAlign="center" mb="10px">
        {hasComment ? (
       <Flex color="gray.500" fontSize="16px" mt="24px" gap="7px">
        <Text>답장을 남겼어요.</Text>
        <Text 
        textDecoration="underline"
        cursor="pointer"
        onClick={viewReply}
        >남긴 답장 보기</Text>
      </Flex>
        ) : (
          <Flex color="gray.500" fontSize="16px" mt="24px" gap="7px">
        <Text>답장을 남기지 않았어요.</Text>
        <Text 
        textDecoration="underline"
        cursor="pointer"
        onClick={clickReply}
        >답장 남기기</Text>
      </Flex>
        )}
      </Box> */}
      <Box w="calc(100% - 200px)" mt="20px" mb="20px">
        <BlueEllipseButton onClick={clickClose}>닫기</BlueEllipseButton>
      </Box>
    </>
  );
};
