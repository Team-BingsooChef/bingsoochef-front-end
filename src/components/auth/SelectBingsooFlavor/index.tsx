import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import malcha from "/src/assets/bingsoo/malcha.png";
import milk from "/src/assets/bingsoo/milk.png";

export const SelectBingsooFlavor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <SelectBingsooFlavorWrapper>
      <Text fontSize="14px" mb="20px" color="#03526B">
        무슨 맛 빙수가 먹고 싶나요?
      </Text>
      <SliderContainer>
        <CustomSlider {...settings}>
          <SlideItem>
            <InSlideText color="#03526B">딸기 빙수</InSlideText>
            <SlideImage src={strawberry} alt="Strawberry Bingsoo" />
          </SlideItem>
          <SlideItem>
          <InSlideText color="#03526B">초코 빙수</InSlideText>
            <SlideImage src={chocolate} alt="Chocolate Bingsoo" />
          </SlideItem>
          <SlideItem>
          <InSlideText color="#03526B">망고 빙수</InSlideText>
            <SlideImage src={mango} alt="Mango Bingsoo" />
          </SlideItem>
          <SlideItem>
          <InSlideText color="#03526B">민트초코 빙수</InSlideText>
            <SlideImage src={mincho} alt="Mint Chocolate Bingsoo" />
          </SlideItem>
          <SlideItem>
          <InSlideText color="#03526B">말차 빙수</InSlideText>
            <SlideImage src={malcha} alt="Matcha Bingsoo" />
          </SlideItem>
          <SlideItem>
          <InSlideText color="#03526B">연유 빙수</InSlideText>
            <SlideImage src={milk} alt="Milk Bingsoo" />
          </SlideItem>
        </CustomSlider>
      </SliderContainer>
    </SelectBingsooFlavorWrapper>
  );
};
const SelectBingsooFlavorWrapper = styled.div`
  width: 100%;
  height: 56vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fdf0cc;
  border-radius: 16px;
`;
const CustomSlider = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const InSlideText = styled(Text)`
  margin-top: 20px;

`;
const SlideImage = styled.img`
  width: 70%; // 이미지가 컨테이너 안에 꽉 차지 않도록
  object-fit: contain; // 이미지 비율 유지하며 컨테이너에 맞춤
  margin-top: 10px; // 라벨과 이미지 간 여백
`;