import './EmailCheck.css'
import { useNavigate } from 'react-router-dom';

const EmailCheck = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToSetpassword = () => {
    navigate('setpassword'); // 로그인 페이지로 이동
  };

  return (
    <div className='emailcheck_display'>
    <form className='emailcheck_form'>
      <label>인증하기</label>
      <p>이메일 인증을 위한 코드가 발급되었습니다<br></br>
        전달받은 코드를 5분안에 입력해주세요
      </p>
      <p>이메일 인증을 위한 코드가 발급되었습니다<br></br>
        전달받은 코드를 5분안에 입력해주세요
      </p>

      <input></input>
      <button onClick={goToSetpassword}>인증하기</button>  {/*이건 따로 이동 버튼이 아니고 누르면 코드 확인 후 다시 로그인 페이지로 넘어가는거라,,,navigate일단 안씀 */}
    </form>
    </div>
  );
};

export default EmailCheck;