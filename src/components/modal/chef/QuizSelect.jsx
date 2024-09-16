import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizSelect.module.css";


const QuizSelect = ({isOpen, onClose, from, content, isReplied, replyContent, willReply }) => {
  if (!isOpen) return null;

  
  return (
  
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
       ㅎㅇ
      </div>
    
  );
};

export default QuizSelect;
