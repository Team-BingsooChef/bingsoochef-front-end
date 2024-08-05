import './SetPassword.css';
import { useNavigate } from 'react-router-dom';

const SetPassword = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToAftersignup = () => {
    navigate('aftersignup'); // 로그인 페이지로 이동
  };

  return (
    <form className='setpassword_form'>
      <button onClick={goToAftersignup}>회원가입</button>
    </form>
  );
};

export default SetPassword;