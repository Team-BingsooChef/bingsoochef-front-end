import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizMakeMult.module.css";


const QuizMakeMult = ({isOpen, onClose, goback, onQuizMakeSuccess}) => {
  if (!isOpen) return null;
  
  return (
  
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
       ㅎㅇ
      </div>
    
  );
};

export default QuizMakeMult;
