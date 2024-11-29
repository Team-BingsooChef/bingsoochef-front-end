import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const Toppings = () => {
  return (
    <>
      <div>토핑 자리</div>
      <ToppingsPagination />
    </>
  );
};

export const ToppingsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
  const [totalPage] = useState(1); // 전체 페이지 수
  const handleNextPage = () => {
    if (currentPage < totalPage - 1) {
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
        variant="outline"
        borderRadius="full"
        aria-label="Previous Page"
      >
        이전
      </IconButton>
      <span>
        {currentPage + 1} / {totalPage}
      </span>
      <IconButton
        onClick={handleNextPage}
        icon={<ChevronRightIcon />}
        disabled={currentPage === totalPage - 1}
        variant="outline"
        borderRadius="full"
        aria-label="Next Page"
      >
        다음
      </IconButton>
    </>
  );
};
