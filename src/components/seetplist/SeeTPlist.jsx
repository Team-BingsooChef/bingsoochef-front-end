import styles from './SeeTPlist.module.css';
import { useNavigate } from 'react-router-dom';

const SeeTPlist = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToMain = () => {
    navigate('/main'); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.seetplistDisplay}>
    <div className={styles.seetplistForm}>
    <div className={styles.wrapper}>

    <div className={styles.top}>
    <label>내가 만든 토핑</label>
          <button className={styles.homebtn} onClick={goToMain}>
            <img src={'/src/assets/icon/homeicon.svg'} alt="Icon"></img>
          </button>
      </div>


      <label className={styles.topt}> 토핑을 누르면, 빙수 주인의 페이지를 방문할 수 있어요</label>
      
      
      </div>
    </div>
  </div>
  );
};

export default SeeTPlist;