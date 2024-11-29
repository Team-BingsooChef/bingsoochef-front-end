import styled from "@emotion/styled";
import { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import malcha from "/src/assets/bingsoo/malcha.png";
import milk from "/src/assets/bingsoo/milk.png";
import { Toppings} from "../Toppings";
export const Bingsoo = () => {
    const [bingsooTaste, setBingsooTaste] = useState("strawberry");
    const getBingsooTasteUrl = (taste: string) => {
        return `/src/assets/bingsoo/${taste}.png`;
      };

  return (
    <Flex w="100%" flexDirection="column" alignItems="center">
      <BingsooContainer bgImage={getBingsooTasteUrl(bingsooTaste)}>
      <Toppings/>
      </BingsooContainer>
    </Flex>
  );
};

const BingsooContainer = styled.div<{ bgImage: string }>`
  position: relative;
  width: 96%;
  height: 66vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat; /* 배경화면 반복 없음 */
  background-size: contain; /* 배경화면을 컨테이너에 맞게 조정 */
  background-position: center; /* 배경화면을 중앙 정렬 */
`;
