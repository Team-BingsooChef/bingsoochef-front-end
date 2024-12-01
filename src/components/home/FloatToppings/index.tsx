import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Image } from "@chakra-ui/react";
import { toppingData } from "../../../__mocks__/topping/data";
import { toppingTypesData } from "../../../__mocks__/toppingtypes/data";
import { ToppingOutsideType } from "../../../api/topping/types";
import { usePaginationStore } from "../../../store/home";
import { useModalStateStore, useModalOpenStore } from "../../../store/modal";
import { useSelectedToppingStore } from "../../../store/api/topping";
import "./ToppingPosition.css";

export const Toppings = () => {
    const currentPage = usePaginationStore((state) => state.currentPage); // Zustand에서 currentPage 가져오기
// 현재 페이지 데이터


    return (
      <>
        {toppingData[currentPage]?.toppings.map((topping: ToppingOutsideType) => (
          <ToppingElement key={topping.toppingId} topping={topping} />
        ))}
      </>
    );
  };

const ToppingElement = ({ topping }: { topping: ToppingOutsideType }) => {
  const { setModalState } = useModalStateStore();
  const { onOpen } = useModalOpenStore();
  const {setSelectedToppingId } = useSelectedToppingStore();
     // toppingTypeId와 isHidden을 기반으로 이미지 가져오기
  const matchingToppingType = toppingTypesData.find(
    (type) => type.toppingTypeId === topping.toppingTypeId
  );
  const imgSrc = topping.isHidden
  ? matchingToppingType?.frozenImg // isHidden이면 frozenImg 사용
  : matchingToppingType?.defrostedImg; // isHidden이 아니면 defrostedImg 사용
   
  // `toppingId % 8` 값을 기반으로 스타일 구분
    const groupClass = `group-${topping.toppingId % 8}`;


    const handleClick = () => {
      setSelectedToppingId(topping.toppingId);
      if (topping.isHidden) {
        setModalState("openQuiz");
        onOpen();
      } else {
        setModalState("readMessage");
        onOpen();
      }
    };
  return (
    <Box
    className={`topping-box ${groupClass}`} // CSS 클래스 적용
    data-group={topping.toppingId % 8} // 데이터 속성으로도 구분 가능
    textAlign="center"
          onClick={handleClick} // 클릭 이벤트 추가
      cursor="pointer"
  
    >
      <Image 
      src={imgSrc} 
      alt={matchingToppingType?.toppingTypeName}
      boxSize="100px"
      objectFit="contain"
      />
      <Text>{topping.chefName}</Text>
    </Box>
  );
}

export const ToppingsPagination = () => {
    const { currentPage, setCurrentPage, totalPages } = usePaginationStore();

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <IconButton
        onClick={handlePreviousPage}
        icon={<ChevronLeftIcon />}
        disabled={currentPage === 0}
        variant="solid"
        borderRadius="full"
        aria-label="Previous Page"
        mr="8px"
      >
        이전
      </IconButton>
      <Text>
        {currentPage + 1} / {totalPages}
      </Text>
      <IconButton
        onClick={handleNextPage}
        icon={<ChevronRightIcon />}
        disabled={currentPage === totalPages - 1}
        variant="solid"
        borderRadius="full"
        aria-label="Next Page"
        ml="8px"
      >
        다음
      </IconButton>
    </>
  );
};
