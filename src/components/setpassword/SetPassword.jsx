import styles from './SetPassword.module.css';
import { useNavigate } from 'react-router-dom';

const SetPassword = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToAftersignup = () => {
    navigate('aftersignup'); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.setpassword_display}>
    <form className={styles.setpassword_form}>
      <div className={styles.title}>
    
      </div>
      <button className={styles.signup} onClick={goToAftersignup}>회원가입</button>
    </form>
    </div>
  );
};

export default SetPassword;