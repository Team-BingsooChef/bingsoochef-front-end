import { useModalHeight } from "../../../hook/useModalHeight";
import {Text, Flex} from "@chakra-ui/react";
import { BlueEllipseButton } from "../../common/CustomedButton";
export const QuizOrNot = () => {
    useModalHeight("24%"); 
    return (
    <>
    <Text color="white" fontSize="24px">퀴즈를 만드시겠습니까?</Text>
    <Flex w="calc(100% - 90px)" gap="24px" mt="20px">
    <BlueEllipseButton>예</BlueEllipseButton>
    <BlueEllipseButton>아니요</BlueEllipseButton>
    </Flex>
    </>
    );
  };
  
  export const SelectQuizType = () => {
    useModalHeight("24%"); 
    return <div>Select Quiz Type</div>;
  };