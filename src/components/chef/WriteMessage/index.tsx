import { useModalHeight } from "../../../hook/useModalHeight";
import { useCreateToppingStore } from "../../../store/api/topping";
import {
  ModalInsideGreyInput,
  ModalTitle,
} from "../../home/ModalCustomedElement";

export const WriteMessage = () => {
  useModalHeight("70%"); // SelectTopping에 맞는 높이 설정
  const { setToppingContent } = useCreateToppingStore();
  return;
  <>
    <ModalTitle title="토핑 작성" />
    <ModalInsideGreyInput
      height="70%"
      placeholder="Enter your text..."
      maxLength={50} // 최대 글자 수 50자로 제한
      onChange={(e) => setToppingContent(e.target.value)}
    />
  </>;
};
