import "./Login.css";
import { useNavigate } from "react-router-dom";
import gotobackicon from '/src/assets/gotobackicon.png'; 

const Login = () => {
  const navigate = useNavigate();

  const goToBack = (e) => {
    e.preventDefault();
    window.history.back();
  }
  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div className="login_display">
    <form className="login_form">
      <button className="back" onClick={goToBack}>
        <img src={gotobackicon} alt="Icon" ></img>
      </button>
      <div className="title">
        <label>로그인하기</label>
      </div>
      <div className="login_input_Wrapper">
      <label className="inputelabel">이메일</label>
      <input className='inpute' type ="email" placeholder='이메일을 입력해 주세요'></input>
      <label className="inputplabel">비밀번호</label>
      <input className='inputp' type ="password" placeholder='비밀번호를 입력해 주세요'></input>
      </div>
      <button className="gomain" onClick={goToMain}>로그인</button>
  

      <div className="Ltext">
        <label className="noaccount">아직 회원이 아니신가요?</label>
        <label className="gotocreate">회원가입</label>
      </div>
    </form>
    </div>
  );
};

export default Login;
