import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OpenLetter.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";
import ReplyLetter from "./ReplyLetter";

const OpenLetter = ({isOpen, onClose, from, content, isReplied, replyContent, willReply }) => {
  if (!isOpen) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  }
  const sendReply = () => {
    willReply();
  }
  return (
  
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
     
          <div className={styles.topWrapper}>
            <p className={styles.from}>
             FROM.
            </p>
            <p className={styles.fromWho}>
              {from}
            </p>
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
              <p>답장을 남기시겠습니까?</p>
              <button onClick={sendReply} >답장 작성</button>
           </div>
       
        )}
         </div>
        <div className={styles.bottomWrapper}>
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
        </div>
      </div>
    
  );
};

export default OpenLetter;
