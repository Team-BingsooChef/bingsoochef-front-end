import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WriteTP.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";

const WriteTP = ({isOpen, onClose, goBack, onWriteSuccess}) => {
  if (!isOpen) return null;


  useEffect(() => {
    // 세션 스토리지에서 writtenContent를 가져오고 상태를 초기화
    const savedContent = window.sessionStorage.getItem('writtenContent');
    if (savedContent) {
      setInputValue(savedContent);
      setCharCount(savedContent.length);
    }
  }, []);

  
  const to = '해커핑'

  const [inputValue, setInputValue] = useState('');  // 입력 값 관리
  const [charCount, setCharCount] = useState(0);     // 현재 글자 수 관리
  const maxChars = 300; 
  const handleInputChange = (e) => {
    const value = e.target.value;
    const charLength = value.length;  // 글자 수 계산      

    if (charLength <= maxChars) {  // 최대 글자 수를 초과하지 않으면 입력 값 업데이트
      setInputValue(value);
      setCharCount(charLength);
    }
  };

  
  const goToSelectTP = () => {
    goBack();
  }
  const [writtenContent, setWrittenContent] = useState('');
  const handleSession = (item) => {
    setWrittenContent(item);
    window.sessionStorage.setItem("writtenContent", item);
    onWriteSuccess();
  };
  return (
    <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.top}>
        <button className={styles.back} onClick={goToSelectTP}>
          <img src={backicon} alt="Icon" />
        </button>
        <label> 토핑 작성 </label>
      </div>
 
     
     <div className={styles.topWrapper}>
       <p className={styles.to}>
        To.
       </p>
       <p className={styles.tomWho}>
         {to}
       </p>
     </div>
   <div className={styles.contentWrapper}>
     <input className={styles.content}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="편지를 작성해 주세요."/>
      <p>{charCount} / {maxChars}</p>
   </div>
   <div className={styles.bottomWrapper}>
   <button className={styles.nextButton} onClick={()=> handleSession(inputValue)}>
     다음
   </button>
   </div>
   </div>
 </div>
    
    
  );
};

export default WriteTP;
