import styled from "@emotion/styled";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import strawberryImg from "../../../assets/bingsoo/strawberry.png";
import chocolateImg from "../../../assets/bingsoo/chocolate.png";
import mangoImg from "../../../assets/bingsoo/mango.png";
import matchaImg from "../../../assets/bingsoo/matcha.png";
import milkImg from "../../../assets/bingsoo/milk.png";
import minchoImg from "../../../assets/bingsoo/mincho.png";

import { Toppings } from "../FloatToppings";

// 맛에 따라 이미지를 매핑
const bingsooImages: Record<string, string> = {
  strawberry: strawberryImg,
  chocolate: chocolateImg,
  mango: mangoImg,
  matcha: matchaImg,
  milk: milkImg,
  mincho: minchoImg,
};

export const Bingsoo = () => {
  const [bingsooTaste] = useState("strawberry");

  // taste에 따라 이미지를 가져옴
  const getBingsooTasteImg = (taste: string): string => {
    return bingsooImages[taste] || strawberryImg; // 기본값을 strawberry로 설정
  };

  return (
    <Flex w="100%" flexDirection="column" alignItems="center">
      <BingsooContainer bgImage={getBingsooTasteImg(bingsooTaste)}>
        <Toppings />
      </BingsooContainer>
    </Flex>
  );
};

const BingsooContainer = styled.div<{ bgImage: string }>`
  position: relative;
  overflow: visible;
  width: 96%;
  height: 66vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat; /* 배경화면 반복 없음 */
  background-size: contain; /* 배경화면을 컨테이너에 맞게 조정 */
  background-position: center; /* 배경화면을 중앙 정렬 */
`;
