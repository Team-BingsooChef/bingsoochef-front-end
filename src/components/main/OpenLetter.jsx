import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OpenLetter.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";
import ReplyLetter from "../modal/ReplyLetter";
const OpenLetter = ({ isOpen, onClose, item, content, from, isReplied, replyContent }) => {
  if (!isOpen) return null;
  
  
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  
    <div className={styles.modalDisplay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <button className={styles.back} onClick={onClose}>
            <img src={backicon} alt="back" />
          </button>
          <div className={styles.topWrapper}>
            <p className={styles.from}>
              <strong>FROM.</strong>
            </p>
            <p className={styles.fromWho}>
              <strong>{from}</strong>
            </p>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <p className={styles.content}>{content}</p>
        </div>

        <div className={styles.replyWrapper}>
          {isReplied ? (
            <div className={styles.reply}>
            <p>답장을 남겼어요! </p>
            <button onClick={handleExpandClick} className={styles.replyButton}> 내가 쓴 답장 보기</button>
            {isExpanded && (
                <div className={styles.expandedContent}>
              {replyContent}
              </div>
            )}
            </div>
          ) : (
             <div className={styles.reply}>
              <p>답장을 남기지 않았어요!</p>
              <button onClick={() => setIsModalOpen(true)}>답장 작성</button>
              <ReplyLetter isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
           </div>
       
        )}
         </div>

        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default OpenLetter;
