import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizSelect.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";

const QuizSelect = ({isOpen, onClose, goBack, onQSoxSuccess, onQSmultSuccess }) => {
  if (!isOpen) return null;

  const goToQuizOrNot = () => {
    goBack();
  };

  const handleOX =() =>{
    window.sessionStorage.setItem("QuizType", 'OX');
    onQSoxSuccess();
  };

  const handleMult =() =>{
    window.sessionStorage.setItem("QuizType", 'Multiple');
    onQSmultSuccess();
  };



  return (
    <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.top}>
      <button className={styles.back} onClick={goToQuizOrNot}>
        <img src={backicon} alt="Icon" />
      </button>
      <label> 퀴즈 형태 </label>
    </div>
    <div className={styles.buttonWrapper}>
      <button onClick={handleMult}>객관식</button>
      <button onClick={handleOX}>O/X</button>
      </div>
      </div>
      </div>
    
  );
};

export default QuizSelect;
