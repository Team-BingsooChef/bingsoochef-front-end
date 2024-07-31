import './CreateAccount.css'
import { useNavigate } from 'react-router-dom';

const CreateAcccount = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToEmailCheck = () => {
    navigate('emailcheck'); // 로그인 페이지로 이동
  };

  return (
    <form className='createaccount_form'>
      <button  onClick={goToEmailCheck}>인증하기</button>
    </form>
  );
};

export default CreateAcccount;