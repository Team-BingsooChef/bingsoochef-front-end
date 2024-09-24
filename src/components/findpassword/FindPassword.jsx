import styles from "./FindPassword.module.css";
import { useNavigate } from "react-router-dom";
import gotobackicon from "/src/assets/icon/gotobackicon.png";
const FindPassword = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.
  const goToEmailCheck = () => {
    navigate("/findpassword/emailcheck");
  };
  const goToBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className={styles.findpassword_display}>
      <div className={styles.findpassword_form}>
        <div className={styles.top}>
          <button className={styles.back} onClick={goToBack}>
            <img src={gotobackicon} alt="Icon"></img>
          </button>
          <div className={styles.title}>
            <label>비밀번호 찾기</label>
          </div>
        </div>
        <div className={styles.Wrapper}>
          <label>비밀번호를 찾고자 하는 아이디를 입력해 주세요</label>
          <input className={styles.input} type ="email" placeholder='이메일을 입력해 주세요'></input>
          <button onClick={goToEmailCheck}>다음</button>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
