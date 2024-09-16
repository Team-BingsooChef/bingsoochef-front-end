import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelectTP.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";

const SelectTP = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  const [selectedTopping, setSelectedTopping] = useState([]);
  const categories = {
    "fruits":["banana", "cherry", "kiwi", "mango", "shine", "strawberry"],
    "snacks":["chex", "maltesers", "oreo", "stick"],
    "ricecakes":["injeolmi", "mochi"]
  };

  const getToppingpath = (topping) => {
    return `/src/assets/toppings/${topping}.svg`;
  };

  const handleSubmit = () => {
    // const orderDetails = [];
    // };
    // fetch('/your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(orderDetails)
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
    console.log('백엔드로 전송할 데이터:', orderDetails);
  };
  return (
      <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.top}>
        <button className={styles.back} onClick={onClose}>
          <img src={backicon} />
        </button>
        <label> 토핑 선택 </label>
      </div>
      <div className={styles.contentWrapper}>
      <div className={styles.itemsWrapper}>
      {categories["fruits"].map((item, index) => (
              <div key={index} className={styles.itemCard}>
                <img src={getToppingpath(item)} alt={item} className={styles.itemImage} />
                <p>{item}</p>
                </div>
            ))}
      </div>
      <div className={styles.itemsWrapper}>
      {categories["snacks"].map((item, index) => (
              <div key={index} className={styles.itemCard}>
                <img src={getToppingpath(item)} alt={item} className={styles.itemImage} />
                <p>{item}</p>
                </div>
            ))}
      </div>
      <div className={styles.itemsWrapper}>
      {categories["ricecakes"].map((item, index) => (
              <div key={index} className={styles.itemCard}>
                <img src={getToppingpath(item)} alt={item} className={styles.itemImage} />
                <p>{item}</p>
                </div>
            ))}
      </div>

      </div>
      </div>
      </div>
    
  );
};

export default SelectTP;
