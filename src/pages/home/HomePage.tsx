import styled from "@emotion/styled";
import { OwnerView, ChefView } from "../../components/home/View";
// import { useParams } from "react-router-dom"; //후에 bingsooId로 페이지 구분
import { ModalLayout } from "../../components/home/ModalLayout";
export default function HomePage() {
    // const { bingsooId } = useParams(); // URL에서 bingsooId 가져오기
    type Role = "chef" | "owner";
    const role: Role = "chef"; // 초기값 "owner"로 설정
    return(
        <Wrapper>
            {role === "chef" ? <ChefView /> : <OwnerView />}
               {/* ModalLayout을 전역적으로 추가 */}
            <ModalLayout/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
