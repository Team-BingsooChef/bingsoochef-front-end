import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { toppingData } from "../../../__mocks__/topping/data";
import { toppingTypesData } from "../../../__mocks__/toppingtypes/data";
import { ToppingType } from "../../../api/home/types";
import { usePaginationStore } from "../../../store";

export const Toppings = () => {
    const currentPage = usePaginationStore((state) => state.currentPage); // Zustand에서 currentPage 가져오기

    return (
      <>
        {toppingData[currentPage]?.toppings.map((topping: ToppingType) => (
          <ToppingElement key={topping.toppingId} topping={topping} />
        ))}
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
