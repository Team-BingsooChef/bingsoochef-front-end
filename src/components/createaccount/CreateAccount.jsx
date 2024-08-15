import React,{useState} from 'react'; // eslint-disable-line no-unused-vars
import styles from './CreateAccount.module.css'
import { useNavigate } from 'react-router-dom';
import gotobackicon from '/src/assets/icon/gotobackicon.png'; 

const CreateAcccount = () => {

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const [certification,certificationsent] = useState(false); // eslint-disable-line no-unused-vars

  const goToEmailCheck = () => {
    navigate('emailcheck'); // 로그인 페이지로 이동
  };

  const goToBack = (e) => {
    e.preventDefault();
    window.history.back();// 로그인 페이지
  };
  
  return (
    <div className={styles.createaccount_display}>
      <div className={styles.createaccount_form}>
        <div className={styles.top}>
          <button className={styles.back} onClick={goToBack}>
            <img src={gotobackicon} alt="Icon" ></img>
          </button>
          <div className={styles.title}>
          <label>가입하기</label> 
          </div> 
        </div>
        <label className={styles.inputlabel}>이메일</label>
        <div className={styles.inputdup_btnWrapper}>
          <input className={styles.input} type ="email" placeholder='이메일을 입력해 주세요'></input>
          <button className={styles.duplicate}>중복 확인</button>
        </div>
        <button className={styles.gotocheck} onClick={goToEmailCheck}>인증하기</button>
        <div className={styles.loginform_btnWrapper}>
          <button className={styles.kakao} type="button">
            <img src="/src/assets/icon/kakaotalkicon.png" alt="Icon" /> 
          </button>
          <button className={styles.naver} type="button">
            <img src="/src/assets/icon/navericon.png" alt="Icon" /> 
          </button>
          <button className={styles.google} type="button">
            <img src="/src/assets/icon/googleicon.png" alt="Icon" /> 
          </button>

        </div>
        <div className={styles.CAtext}>
        <label className={styles.already}>이미 계정이 있으신가요?</label>
        <label className={styles.gotologin} onClick={goToBack}>로그인</label>
        </div>
      </div>
    </div>

  );
};

export default CreateAcccount;