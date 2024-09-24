import styles from './Introduce.module.css';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToAftersignup = () => {
    navigate('aftersignup'); // 로그인 페이지로 이동
  };

  return (
      <div className={styles.introduceDisplay}>
        <div className={styles.introduceForm}>
        <h1> ㅎㅇ </h1>
    </div>
  </div>
  );
};

export default Introduce;