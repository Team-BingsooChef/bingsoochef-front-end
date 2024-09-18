import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelectTP.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";

const SelectTP = ({isOpen, onClose, onSelectSuccess}) => {
  if (!isOpen) return null;

  const [selectedTopping, setSelectedTopping] = useState('');
  const categories = {
    "fruits":["banana", "cherry", "kiwi", "mango", "shine", "strawberry"],
    "snacks":["chex", "maltesers", "oreo", "stick"],
    "ricecakes":["injeolmi", "mochi"]
  };

  const getToppingpath = (topping) => {
    return `/src/assets/toppings/${topping}.svg`;
  };

  const handleItemClick = (item) => {
    setSelectedTopping(item);
    window.sessionStorage.setItem("selectedTopping", item);
    onSelectSuccess();
  };
  return (
      <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.top}>
        <button className={styles.back} onClick={onClose}>
          <img src={backicon} alt="Icon" />
        </button>
        <label> 토핑 선택 </label>
      </div>
      <div className={styles.contentWrapper}>
      <label> - 과일</label>
      <div className={styles.itemsWrapper}>
      {categories["fruits"].map((item, index) => (
             <button key={index} 
             className={styles.itemCard}
             onClick={() => handleItemClick(item)}>
                <img src={getToppingpath(item)} alt={item} className={styles.itemImage} />
                </button>
            ))}
      </div>
      <label> - 과자</label>
      <div className={styles.itemsWrapper}>
      {categories["snacks"].map((item, index) => (
              <button key={index} 
              className={styles.itemCard}
              onClick={() => handleItemClick(item)}>
                <img src={getToppingpath(item)} alt={item} className={styles.itemImage} />
                </button>
            ))}
      </div>
      <label> - 떡</label>
      <div className={styles.itemsWrapper}>
      {categories["ricecakes"].map((item, index) => (
              <button key={index} 
              className={styles.itemCard}
              onClick={() => handleItemClick(item)}>
                <img src={getToppingpath(item)} alt={item} className={styles.itemImage} />
                </button>
            ))}
      </div>

      </div>
      </div>
      </div>
    
  );
};

export default SelectTP;
