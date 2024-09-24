import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizMakeOX.module.css";


const QuizMakeOX = ({isOpen, onClose, goback, onQuizMakeSuccess}) => {
  if (!isOpen) return null;

  
  return (
  
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
       ㅎㅇ
      </div>
    
  );
};

export default QuizMakeOX;
