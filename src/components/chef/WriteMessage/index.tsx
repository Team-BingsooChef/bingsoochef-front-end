import { useModalHeight } from "../../../hook/useModalHeight";
import {
    ModalInsideGreyInput,
    ModalTitle,
  } from "../../home/ModalCustomedElement";


export const WriteMessage = () => {
    useModalHeight("70%"); // SelectTopping에 맞는 높이 설정
    return 
    <>
         <ModalTitle title="토핑 작성" />
         <ModalInsideGreyInput height="70%" />
    </>;
  };