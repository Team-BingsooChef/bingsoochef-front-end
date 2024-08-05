import './PreLogin.css'
import { useNavigate } from 'react-router-dom';

const PreLogin = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToLogin = (e) => {
    e.preventDefault();
    navigate('login'); // 로그인 페이지로 이동
  };

  const goToCreateAccount = (e) => {
    e.preventDefault();
    navigate('createaccount'); // 로그인 페이지로 이동
  };

  return (
    <form className='prelogin_form'>
    
      <button type="button">카카오 계정로 로그인</button>
      <button type="button">네이버 계정으로 로그인</button>
      <button type="button">구글 계정으로 로그인</button>
      <button type="button" onClick={goToLogin}>이메일로 로그인</button>
      <button type="button" onClick={goToCreateAccount}>회원가입</button>

    </form>
  );
};

export default PreLogin;