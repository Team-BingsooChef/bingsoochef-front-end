import React from 'react';
import styles from './OpenQuiz.module.css';

const OpenQuiz = ({isOpen, onClose}) => {
  if (!isOpen) return null;
  
  return (
    <div className={styles.modalDisplay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>닫기</button>
        <h1>ㅎㅇ</h1>
      </div>
    </div>
  );
};

export default OpenQuiz;