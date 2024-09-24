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
  const [quizQ, setQuizQ] = useState("");            // 질문
  const [choices, setChoices] = useState([
    { text: '', selected: false },
    { text: '', selected: false },
  ]);
  const [maxChoices, setMaxChoices] = useState(2);   // 기본 2개만 보여줌
  const handleChoiceInputChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index].text = value;
    setChoices(newChoices);
  };
  const handleRadioChange = (index) => {
    const newChoices = choices.map((choice, i) => ({
      ...choice,
      selected: i === index,
    }));
    setChoices(newChoices);
  };
  const addChoice = () => {
    if (choices.length < 4) {
      setChoices([...choices, { text: '', selected: false }]);
      setMaxChoices(maxChoices + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const charLength = value.length;  // 글자 수 계산

    if (charLength <= maxChars) {     // 최대 글자 수를 초과하지 않으면 입력 값 업데이트
      setInputValue(value);
      setCharCount(charLength);
    }
  };
  const goToSetChefName = () => {
    handleSession();
    onQuizMakeSuccess();
  }
  const handleSession = () => {
    const questions = choices.map((choice) => ({
      first: choice.text,
      second: choice.selected,
    }));
    
    window.sessionStorage.setItem("quizQ", inputValue);  // 질문 저장
    window.sessionStorage.setItem("quizA", JSON.stringify(questions));  // 선택지 저장
  };
  return (
    <div className={styles.modalDisplay} onClick={onClose}>
     <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>

     <div className={styles.QuestionContent}>
       <input 
         className={styles.input}
         value={inputValue}
         onChange={handleInputChange}
         placeholder="Q. 질문을 작성해주세요"/>
          <p>{charCount} / {maxChars} </p>      {/* 현재 글자 수 표시 */}
       </div>
   
       {choices.slice(0, maxChoices).map((choice, index) => (
          <div
            key={index}
            className={`${styles.choiceWrapper} ${
              choice.selected ? styles.selected : ''
            }`}
          >
            <input
              type="text"
              value={choice.text}
              onChange={(e) => handleChoiceInputChange(index, e.target.value)}
              placeholder={`선지 ${index + 1}`}
              className={styles.choiceInput}
            />
            <input
              type="radio"
              name="quizOption"
              checked={choice.selected}
              onChange={() => handleRadioChange(index)}
            />
          </div>
           ))}
      
        {maxChoices < 4 && (
          <button className={styles.addButton} onClick={addChoice}>
            + 클릭해서 선지를 추가하세요
          </button>
        )}
        
       
       <div className={styles.bottomWrapper}>
         <button onClick={goToSetChefName} className={styles.nextButton}>작성 완료</button>
       </div>
   );
};

export default QuizMakeMult;