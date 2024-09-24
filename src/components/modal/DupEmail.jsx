import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DupEmail.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";


const DupEmail = ({isOpen, onClose}) => {
  if (!isOpen) return null;


  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/prelogin/createaccount");
  }

  return (

      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <label>잘못된 접근</label>
        </div>
        <div className={styles.contentWrapper}>
          <label>이미 사용중인 이메일입니다</label>
        </div>
        
        <button className={styles.closeButton} onClick={onClose}>
          다시 시도
        </button>
      </div>
    
  );
};

export default DupEmail;
