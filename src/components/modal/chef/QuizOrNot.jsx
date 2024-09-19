import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizOrNot.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";

const QuizOrNot = ({isOpen, onClose, goBack, onQONSuccess}) => {
  if (!isOpen) return null;

  const goToWriteTP = () => {
    goBack();
  }
  const handleQuizX = () => {
    window.sessionStorage.setItem("Quiz", false);
    onQONSuccess();
  }
  const handleQuizO = () => {
    window.sessionStorage.setItem("Quiz", true);
    onQONSuccess();
  };
  
  return (
    <div className={styles.modalDisplay} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
    <div className={styles.top}>
      <button className={styles.back} onClick={goToWriteTP}>
        <img src={backicon} alt="Icon" />
      </button>
      <label> 퀴즈를 설정하시겠습니까? </label>
    </div>
    <div className={styles.buttonWrapper}>
      <button onClick={handleQuizO}>예</button>
      <button onClick={handleQuizX}>아니요</button>
      </div>
    </div>
    </div>
  );
};

export default QuizOrNot;
