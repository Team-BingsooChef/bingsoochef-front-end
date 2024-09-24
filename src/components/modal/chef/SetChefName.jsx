import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SetChefName.module.css";


const SetChefName = ({isOpen, onClose, onChefNameSuccess}) => {
  if (!isOpen) return null;

  const handleChefName = () => {
    onChefNameSuccess();
  }
  return (
    <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
       ㅎㅇ
      </div>
    </div>
  );
};

export default SetChefName;
