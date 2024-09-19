import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizOrNot.module.css";


const QuizOrNot = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  
  return (
    <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
       ㅎㅇ
      </div>
    </div>
    
  );
};

export default QuizOrNot;
