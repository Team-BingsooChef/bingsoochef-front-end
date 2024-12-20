import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import matcha from "/src/assets/bingsoo/matcha.png";
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
  
  const bingsooData = [
    { name: "딸기 빙수", image: strawberry },
    { name: "초코 빙수", image: chocolate },
    { name: "망고 빙수", image: mango },
    { name: "민트초코 빙수", image: mincho },
    { name: "말차 빙수", image: matcha },
    { name: "연유 빙수", image: milk },
  ];
  return (
    <SelectBingsooFlavorWrapper>
      <Text fontSize="14px" mb="20px" color="#03526B">
        무슨 맛 빙수가 먹고 싶나요?
      </Text>
      <SliderContainer>
        <CustomSlider {...settings}>
        {bingsooData.map((item, index) => (
          <SlideItem key={index}>
            <InSlideText color="#03526B">{item.name}</InSlideText>
            <SlideImage src={item.image} alt={item.name} />
          </SlideItem>
               ))}
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf0cc;
  border-radius: 16px;
`;
const CustomSlider = styled(Slider)`
 width: 100%; /* 슬라이더 너비 */
 height: 100%; /* 슬라이더 높이 */
  display: flex;
  align-items: center;
  justify-content: center;

  .slick-dots{
    bottom: 10px;
  }
`;

const SlideItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const InSlideText = styled(Text)`
  font-size: 24px;

`;
const SlideImage = styled.img`
  width: 100%; // 이미지가 컨테이너 안에 꽉 차지 않도록
  height: 300px;
  object-fit: contain; // 이미지 비율 유지하며 컨테이너에 맞춤
  margin-top: 24px; // 라벨과 이미지 간 여백

`;
