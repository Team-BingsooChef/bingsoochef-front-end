import styles from "./ResetPassword.module.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.
  const goToLogin = () => {
    navigate('/Prelogin'); // 로그인 페이지로 이동
  };
  return (
    <div className={styles.resetpassword_display}>
    <div className={styles.resetpassword_form}>
      <label className={styles.title}>비밀번호 찾기</label>
      <div className={styles.Wrapper}>
        <label>새 비밀번호</label>
        <input className={styles.input} type ="email" placeholder='10~15자, 특수문자 포함'></input>
        <label>비밀번호 확인</label>
        <input className={styles.input} type ="password" placeholder='비밀번호를 한번 더 입력해 주세요'></input>
      </div>
      <button className={styles.gologin} onClick={goToLogin}>변경하기</button>
    </div>
  </div>
  );
};

export default ResetPassword;
