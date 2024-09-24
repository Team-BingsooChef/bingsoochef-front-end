import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizMakeMult.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";
import O from '/src/assets/icon/O.svg';
import X from '/src/assets/icon/X.svg';

const QuizMakeMult = ({isOpen, onClose, goback, onQuizMakeSuccess}) => {
  if (!isOpen) return null;
  const [inputValue, setInputValue] = useState('');  // 입력 값 관리
  const [charCount, setCharCount] = useState(0);     // 현재 글자 수 관리
  const maxChars = 30;                               // 최대 글자 수 설정
  const [quizQ, setQuizQ] = useState("");
  const [quizA, setQuizA] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const charLength = value.length;  // 글자 수 계산      
  

    if (charLength <= maxChars) {  // 최대 글자 수를 초과하지 않으면 입력 값 업데이트
      setInputValue(value);
      setCharCount(charLength);
    }
  };
  
  const goToSetChefName = () => {
    handleSession();
    onQuizMakeSuccess();
  }
  const handleRadioChange = (value) => {
    setQuizA(value);
  };
  const handleSession = () => {
    window.sessionStorage.setItem("quizQ", inputValue);
    window.sessionStorage.setItem("quizA", quizA);
  }
  return (
  
    <div className={styles.modalDisplay} onClick={onClose}>
     <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
           <button className={styles.back} onClick={goback}>
             <img src={backicon} alt="back" />
           </button>
           <label> 객관식 퀴즈 내기 </label>
         </div>
        
     <div className={styles.QuestionContent}>
       <input 
         className={styles.replyText}
         value={inputValue}
         onChange={handleInputChange}
         placeholder="Q. 질문을 작성해주세요"/>
          <p>{charCount} / {maxChars} </p>      {/* 현재 글자 수 표시 */}
       </div>
       <label htmlFor="question"></label>
       <div className={styles.choices}>
       <button
            className={quizA === 'O' ? styles.selected : ''}
            onClick={() => handleRadioChange('O')}
          >
          <img src={O}/>
           </button>
           <button
            className={quizA === 'X' ? styles.selected : ''}
            onClick={() => handleRadioChange('X')}
          >
        <img src={X}/>
           </button>
        </div>
        <div className={styles.radioWrapper}>
          <label>
            <input
              type="radio"
              name="quizOption"
              value="O"
              checked={quizA === 'O'}
              onChange={() => handleRadioChange('O')}
            />
            
          </label>
          <label>
            <input
              type="radio"
              name="quizOption"
              value="X"
              checked={quizA === 'X'}
              onChange={() => handleRadioChange('X')}
            />
          </label>
        </div>
       <div className={styles.bottomWrapper}>
         <button onClick={goToSetChefName} className={styles.nextButton}>작성 완료</button>
       </div>
     </div>
     </div>
   );
};

export default QuizMakeMult;