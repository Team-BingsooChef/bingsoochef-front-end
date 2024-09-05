import React from 'react';
import styles from './ReplyLetter.module.css';

const ReplyLetter = ({isOpen, onClose, from}) => {
  if (!isOpen) return null;
  
  return (

    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>닫기</button>
        <h1>ㅎㅇ</h1>
      </div>
  );
};

export default ReplyLetter;