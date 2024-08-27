import React, { Component, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import styles from "./Main.module.css";

const Bingsoo = ({toppings}) => {
  
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수



  const [bingsoo, setBingsoo] = useState([]);
  
  console.log("Toppings:", toppings);

  const toppingGroups = [];
  for (let i = 0; i < toppings.length; i += 8) {
    toppingGroups.push(toppings.slice(i, i + 8));
  }
  console.log("ToppingGroups:", toppingGroups);
  
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

  

  const fetchBingsoo = async () => {
    // API 요청 코드 - 실제로는 fetch나 axios를 사용해 데이터를 가져옴
    const samplebingsooData = "strawberry";
    setBingsoo(samplebingsooData);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
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
            <div key={item.id} className={styles.topping_slider}>
                <div className={styles[`row_${item.id}`]}>
                <img 
                  src={item.opened ? getToppingpath(item) : getIceToppingpath(item)}
                  alt={item.from}
                  className={item.opened ? styles.topping_image : styles.ice_topping_image}
               />
               </div>
               </div>
          ))}
          
            <div className={styles.pagination}>
             <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          이전
        </button>
        <span>{currentPage + 1} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          다음
        </button>
                </div>
    </div>
  </div>
  );
};

export default Bingsoo;
