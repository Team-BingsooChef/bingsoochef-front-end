import styled from "@emotion/styled";
import { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import malcha from "/src/assets/bingsoo/malcha.png";
import milk from "/src/assets/bingsoo/milk.png";

export const Bingsoo = () => {
    const [bingsooTaste, setBingsooTaste] = useState("strawberry"); // 초기값 설정

    const getBingsooTasteUrl = (taste: string) => {
        return `/src/assets/bingsoo/${taste}.png`;
      };

  return (
    <Flex w="100%" flexDirection="column" alignItems="center">
      <BingsooContainer>
        <Image src={getBingsooTasteUrl(bingsooTaste)} alt="strawberry" />
      </BingsooContainer>
    </Flex>
  );
};

const BingsooContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
