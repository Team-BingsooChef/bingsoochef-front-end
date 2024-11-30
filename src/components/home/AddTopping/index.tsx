import { useModalHeight } from "../../../hook/useModalHeight";
import {
  ModalInsideGreyContainer,
  ModalInsideGreyInput,
  ModalTitle,
  LetterTopInfo,
} from "../ModalCustomedElement";

export const SelectTopping = () => {
  useModalHeight("70%"); // SelectTopping에 맞는 높이 설정
  return <>
  <ModalTitle title="토핑 선택"/>
  <ModalInsideGreyContainer height="70%">

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
