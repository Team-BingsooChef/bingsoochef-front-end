import styles from './SeeTPlist.module.css';
import { useNavigate } from 'react-router-dom';

const SeeTPlist = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToAftersignup = () => {
    navigate('aftersignup'); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.seetplistDisplay}>
    <div className={styles.seetplistForm}>
      
    </div>
  </div>
  );
};

export default SeeTPlist;