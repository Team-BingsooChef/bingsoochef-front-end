import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WrongLogin.module.css";
import backicon from "/src/assets/icon/gotobackicon_white.svg";


const WrongLogin = ({isOpen, onClose}) => {
  if (!isOpen) return null;


  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/prelogin/login");
  }

  return (

      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <label>잘못된 접근</label>
        </div>
        <div className={styles.contentWrapper}>
          <label>아이디 또는 비밀번호를 잘못 입력하셨습니다.</label>
          <br></br>
          <label>입력하신 내용을 다시 확인해주세요</label>
        </div>
        
        <button className={styles.closeButton} onClick={onClose}>
          다시 시도
        </button>
      </div>
    
  );
};

export default WrongLogin;
