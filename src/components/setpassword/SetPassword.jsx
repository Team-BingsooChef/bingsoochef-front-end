import React, { useState } from "react";
import styles from './SetPassword.module.css';
import { useNavigate } from 'react-router-dom';

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(""); // 비밀번호 오류 메시지 상태
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // 비밀번호 확인 오류 메시지 상태
  
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const checkPassword = (password) => {
    const lengthCheck = password.length >= 10 && password.length <= 15;
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return lengthCheck && specialCharCheck;
  };
  
  const goToAftersignup = () => {
    let isValid = true;

    if (!checkPassword(password)) {
      setPasswordError("비밀번호는 10~15자, 특수문자를 포함해야 합니다.");
      isValid = false;
    } else {
      setPasswordError(""); // 오류 없으면 초기화
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      isValid = false;
    } else {
      setConfirmPasswordError(""); // 오류 없으면 초기화
    }
    
   if(isValid) {
    navigate("aftersignup");
   }
  };

  return (
    <div className={styles.setpassword_display}>
    <div className={styles.setpassword_form}>
      <label className={styles.title}>가입하기</label>
      <div className={styles.Wrapper}>
        <label>비밀번호</label>
        <input 
        className={`${styles.input} ${passwordError ? styles.errorInput : ''}`} 
        type ="password" 
        placeholder='10~15자, 특수문자 포함'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>} 

        <label>비밀번호 확인</label>

        <input 
        className={`${styles.input} ${confirmPasswordError ? styles.errorInput : ''}`} 
        type ="password" 
        placeholder='비밀번호를 한번 더 입력해 주세요'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        {confirmPasswordError && <p className={styles.errorMessage}>{confirmPasswordError}</p>}
      </div>
      <button className={styles.signup} onClick={goToAftersignup}>회원가입</button>
    </div>
  </div>
  );
};

export default SetPassword;