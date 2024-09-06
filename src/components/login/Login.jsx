import React, { useState } from "react";
import styles from "./Login.module.css";
import WrongLogin from "../modal/WrongLogin";
import { useNavigate, Link } from "react-router-dom";
import gotobackicon from "/src/assets/icon/gotobackicon.png";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const goToBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const goToCreate = () => {
    navigate("/prelogin/createaccount");
  };

  const goToMain = () => {
    // 간단한 로그인 검증 로직 (실제로는 서버 요청으로 대체)
    if (email === "bingsoochef2@gmail.com" && password === "password") {
      navigate("/main");
    } else {
      setModalOpen(true); // 로그인 실패 시 모달 열기
    }
  };

  return (
    <div className={styles.login_display}>
      <div className={styles.login_form}>
        <div className={styles.top}>
          <button className={styles.back} onClick={goToBack}>
            <img src={gotobackicon} alt="Icon"></img>
          </button>
          <div className={styles.title}>
            <label>로그인하기</label>
          </div>
        </div>
        <div className={styles.input_Wrapper}>
        <label className={styles.inputelabel}>이메일</label>
        <input
          className={styles.inpute}
          type="email"
          placeholder="이메일을 입력해 주세요"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className={styles.inputplabel}>비밀번호</label>
        <input
          className={styles.inputp}
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to="/findpassword" className={styles.findpw}>비밀번호 찾기</Link>
        <button className={styles.gomain} onClick={goToMain}>
          로그인
        </button>
        </div>
        <div className={styles.Ltext}>
          <label className={styles.noaccount}>아직 회원이 아니신가요?</label>
          <label className={styles.gotocreate} onClick={goToCreate}>회원가입</label>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalDisplay} onClick={handleCloseModal}>
        <WrongLogin isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};
export default Login;
