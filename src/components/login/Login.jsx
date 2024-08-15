import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import gotobackicon from "/src/assets/icon/gotobackicon.png";

const Login = () => {
  const navigate = useNavigate();

  const goToBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  const goToCreate = () => {
    navigate("/prelogin/createaccount");
  };
  const goToMain = () => {
    navigate("/main");
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
        ></input>
        <label className={styles.inputplabel}>비밀번호</label>
        <input
          className={styles.inputp}
          type="password"
          placeholder="비밀번호를 입력해 주세요"
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
    </div>
  );
};
export default Login;
