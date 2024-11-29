import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { toppingData } from "../../../__mocks__/topping/data";
import { toppingTypesData } from "../../../__mocks__/toppingtypes/data";
import { ToppingType } from "../../../api/home/types";

export const Toppings = () => {
  return (
    <>
      {currentPage === 0 &&
        {toppingData[0].toppings.map((topping: ToppingType) => (
          <ToppingElement key={topping.toppingId} topping={topping} />
        ))}}
    </>
  );
};

const ToppingElement = ({ topping }: { topping: ToppingType }) => {
  return (
    <div>
      <img src={topping.frozenImg} alt={topping.toppingTitle} />
      <span>{topping.toppingTitle}</span>
    </div>
  );
}

export const ToppingsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
  const [totalPages] = useState(1); // 전체 페이지 수

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
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
