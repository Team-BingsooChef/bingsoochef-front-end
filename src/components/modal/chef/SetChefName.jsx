import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SetChefName.module.css";


const SetChefName = ({isOpen, onClose, onChefNameSuccess}) => {
  if (!isOpen) return null;

  const [inputValue, setInputValue] = useState('');  // 입력 값 관리
  const [charCount, setCharCount] = useState(0);     // 현재 글자 수 관리
  const [chefName, setChefName] = useState("");
  const maxChars = 8;    

  const handleInputChange = (e) => {
    const value = e.target.value;
    const charLength = value.length;  // 글자 수 계산      
  

    if (charLength <= maxChars) {  // 최대 글자 수를 초과하지 않으면 입력 값 업데이트
      setInputValue(value);
      setCharCount(charLength);
    }
  };

  const goToSetMain = () => {
    handleSession();
    onChefNameSuccess();
  }
  
  
  const handleSession = () => {
    window.sessionStorage.setItem("chefName", inputValue);
  }



  return (
    <div className={styles.modalDisplay} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

       <div className={styles.top}>
          <label> 세프의 이름을 적어주세요 </label>
        </div>
       
        <div className={styles.NameContentWrapper}>
          <div className={styles.NameContent}>
            <input 
              className={styles.replyText}
              value={inputValue}
              onChange={handleInputChange}
              placeholder="이름을 작성해주세요"/>
          </div>
            <label> 셰프님 </label>
          </div>

          <p>{charCount} / {maxChars} </p>     
          
        <div className={styles.bottomWrapper}>
         <button onClick={goToSetMain} className={styles.nextButton}>토핑 추가 완료</button>
       </div>
    </div>
    </div>
  );
};

export default SetChefName;
