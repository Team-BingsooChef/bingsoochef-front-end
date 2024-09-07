import React, { Component, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import styles from "./Main.module.css";
import OpenLetter from "../modal/OpenLetter";
import OpenQuiz from "../modal/OpenQuiz";

const Bingsoo = ({toppings, viewType }) => {
  const isTouchable = viewType === "owner";
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
  const [totalPage, setTotalPage] = useState(0); // 전체 페이지 수
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState("");
  const [currentFrom, setCurrentFrom] = useState("");
  const [isIReplied, setIsIReplied] = useState(false);
  const [currentReply, setCurrentReply] = useState("");

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentContent("");
    setCurrentFrom("");
    setCurrentReply("");
    setIsIReplied(false);
  };
  const handleViewLetter = (topping) => {
    setModalOpen(true);
    setCurrentContent(topping.content);
    setCurrentFrom(topping.from);
    setCurrentReply(topping.reply);
    setIsIReplied(topping.replied);
  };



  const [bingsoo, setBingsoo] = useState([]);
  
  console.log("Toppings:", toppings);

  
  const getbingsooPath = (bingsoo) => {
    return `/src/assets/bingsoo/${bingsoo}.png`;
  };
  
  const getToppingpath = (topping) => {
    return `/src/assets/toppings/${topping.topping}.svg`;
  };

  const getIceToppingpath = (topping) => {
    return `/src/assets/toppings/ice_${topping.topping}.svg`;
  }

  useEffect(() => {
    // 백엔드에서 토핑 리스트를 가져오는 API 호출
    fetchBingsoo();
  }, []);

//   useEffect(() => {
//     // 페이지 변경 시 데이터를 불러오는 함수
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/data?page=${currentPage}`);
//         const result = await response.json();
//         setData(result.items); // 받은 데이터를 설정
//         setTotalPages(result.totalPages); // 전체 페이지 수를 설정
//       } catch (error) {
//         console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
//       }
//     };

//     fetchData();
//   }, [currentPage]); // currentPage가 변경될 때마다 호출

useEffect(() => {
  // 페이지 변경 시 데이터를 불러오는 함수
  // currentPage에 맞는 데이터를 필터링하여 data에 설정
  const filteredData = toppings.filter(topping => topping.currentPage === currentPage);
  setData(filteredData);
  setTotalPage(2);
}, [currentPage, toppings]);



  const fetchBingsoo = async () => {
    // API 요청 코드 - 실제로는 fetch나 axios를 사용해 데이터를 가져옴
    const samplebingsooData = "strawberry";
    setBingsoo(samplebingsooData);
  }

  const handleNextPage = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
 
 

  return (
    <div className={styles.bingsoo_container}>
      {/* <img className={styles.bingsoo} src={getbingsooPath(bingsoo)} alt="빙수 이미지" /> */}
      <div className={styles.sliderWrapper}>
          {data.map((item) => (
            
                <div key={item.id} className={styles[`row_${item.id}`]}>
                <img 
                  src={item.opened ? getToppingpath(item) : getIceToppingpath(item)}
                  alt={item.from}
                  className={item.opened ? styles.topping_image : styles.ice_topping_image}
                  onClick={isTouchable ? () => handleViewLetter(item) : undefined}
                  style={{ cursor: isTouchable ? 'pointer' : 'default' }} // isTouchable이 true일 때만 pointer 적용
              />
             
              {item.opened ? 
              
              <OpenLetter
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            item = {item}
                            content = {currentContent}
                            from = {currentFrom}
                            isReplied = {isIReplied}
                            replyContent = {currentReply}
                          />
              
               : 
                <OpenQuiz
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                      />
                
              }
            
               </div>
          ))}
           </div>
           
            <div className={styles.pagination}>
             <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          이전
        </button>
        <span>{currentPage + 1} / {totalPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPage - 1}>
          다음
        </button>
                </div>
   
  </div>
  );
};

export default Bingsoo;