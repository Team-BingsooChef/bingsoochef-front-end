import styles from "./AfterSignup.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from '/src/components/slidercomponent/SliderComponent';
import { useNavigate } from "react-router-dom";

const AfterSignup = () => {
  const navigate = useNavigate();

 

  const goToMain = () => {
    navigate("/main");
  };
  

  return (
    <div className={styles.aftersignup_display}>
      <div className={styles.aftersignup_form}>
        <div className={styles.widthwrapper}>
          <label className={styles.inputlabel}>당신을 뭐라고 부를까요?</label>
          <input
            className={styles.input}
            type="text"
            maxLength={8}
            placeholder="8자 내로 닉네임을 설정해 주세요"
          ></input>
          <p className={styles.ask}>무슨 맛 빙수가 먹고 싶나요?</p>
          <div className={styles.slider}>
          <SliderComponent />
          </div>
          <button className={styles.gotomain} value="submit" onClick={goToMain}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterSignup;
