import styled from "@emotion/styled";
import { Menu } from "../../components/home/Menu";
import { OwnerView, ChefView } from "../../components/home/View";
export default function HomePage() {
    type Role = "chef" | "owner";
    const role: Role = "owner"; // 초기값 "owner"로 설정
    return(
        <Wrapper>
            {role === "owner" ? <OwnerView /> : <ChefView />}
        <Menu />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
