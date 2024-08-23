import React, { useState } from 'react';
import styles from './SeeReply.module.css';

const SeeReply = ({ isOpen, onClose, replyContent, to}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.replyTop}>
      <p className={styles.from}><strong>FROM.</strong></p>
       <p className={styles.fromWho}><strong>{to}</strong></p>
       </div>
        <p>{replyContent}</p>
        <button className={styles.closeButton} onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default SeeReply;
