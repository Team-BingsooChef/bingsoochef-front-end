import styles from  './PreLogin.module.css';
import { useNavigate } from "react-router-dom";

const PreLogin = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToLogin = (e) => {
    e.preventDefault();
    navigate("login"); // 로그인 페이지로 이동
  };

  const goToCreateAccount = (e) => {
    e.preventDefault();
    navigate("createaccount"); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.preloginDisplay}>
      <div className={styles.preloginForm}>
        <div className={styles.preloginForm_btnWrapper}>
          <button className={styles.kakao} type="button">
          <img src="/src/assets/kakaotalkicon.png" alt="Icon" style={styles.icon} /> 
            카카오 계정으로 로그인
          </button>
          <button className={styles.naver} type="button">
          <img src="/src/assets/navericon.png" alt="Icon" style={styles.icon} /> 
            네이버 계정으로 로그인</button>
          <button className={styles.google} type="button">
          <img src="/src/assets/googleicon.png" alt="Icon" style={styles.icon} /> 
          구글 계정으로 로그인</button>
        </div>

        <div className={styles.preloginForm_emailBtnWrapper}>
          <button className={styles.email} type="button" onClick={goToLogin}>
            이메일로 로그인
          </button>
          <button className={styles.signup} type="button" onClick={goToCreateAccount}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreLogin;
