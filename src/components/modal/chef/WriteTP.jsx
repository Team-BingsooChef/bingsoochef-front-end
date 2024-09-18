import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WriteTP.module.css";


const WriteTP = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  
  return (
    <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
       ㅎㅇ
      </div>
      </div>
    
  );
};

export default WriteTP;
