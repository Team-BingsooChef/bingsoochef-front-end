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
    <div className="createaccount_display">
      <form className='createaccount_form'>
        <button className='back' onClick={goToBack}>
          <img src={gotobackicon} alt="Icon" ></img>
        </button>
        <div className='title'><label>가입하기</label></div> 
        <div className='input'>
          <label>이메일</label>
          <input type ="email" placeholder='이메일을 입력해 주세요'></input>
        </div>
        <button className='duplicate'>중복 확인</button>
      
        <button className='check' onClick={goToEmailCheck}>인증하기</button>
      </form>
    </div>

  );
};

export default CreateAcccount;