import styles from './ChangeFlavor.module.css';
import { useNavigate } from 'react-router-dom';
import SliderComponent from '../slidercomponent/SliderComponent';

const ChangeFlavor = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToMain = () => {
    navigate('/main'); // 로그인 페이지로 이동
  };

  return (
          <div className={styles.changeflavorDisplay}>
      <div className={styles.changeflavorForm}>
      <div className={styles.wrapper}>
      <div className={styles.top}>
      <button className={styles.homebtn} onClick={goToMain}>
            <img src={'/src/assets/icon/homeicon.svg'} alt="Icon"></img>
          </button>
      </div>
      <label className={styles.ask}>무슨 맛 빙수로 바꾸고 싶나요?</label>
      <div className={styles.slider}>
      <SliderComponent />
      </div>
      <button className={styles.change} onClick={goToMain}>변경 완료</button>
      </div>
    </div>
  </div>
  );
};

export default ChangeFlavor;