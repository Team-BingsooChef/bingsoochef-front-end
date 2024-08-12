import React,{useState} from 'react'; // eslint-disable-line no-unused-vars
import './CreateAccount.css'
import { useNavigate } from 'react-router-dom';
import gotobackicon from '/src/assets/gotobackicon.png'; 

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
    <div className='createaccount_display'>
      <form className='createaccount_form'>
        <button className='back' onClick={goToBack}>
          <img src={gotobackicon} alt="Icon" ></img>
        </button>
        <div className='title'>
        <label>가입하기</label> 
        </div> 
        <label className='inputlabel'>이메일</label>
        <div className='inputdup_btnWrapper'>
          <input className='input' type ="email" placeholder='이메일을 입력해 주세요'></input>
          <button className='duplicate'>중복 확인</button>
        </div>
        <button className='gotocheck' onClick={goToEmailCheck}>인증하기</button>
        <div className='loginform_btnWrapper'>
          <button className='kakao' type="button">
            <img src="/src/assets/kakaotalkicon.png" alt="Icon" /> 
          </button>
          <button className='naver' type="button">
            <img src="/src/assets/navericon.png" alt="Icon" /> 
          </button>
          <button className='google' type="button">
            <img src="/src/assets/googleicon.png" alt="Icon" /> 
          </button>

        </div>
        <div className="CAtext">
        <label className='already'>이미 계정이 있으신가요?</label>
        <label className='gotologin'>로그인</label>
        </div>
      </form>
    </div>

  );
};

export default CreateAcccount;