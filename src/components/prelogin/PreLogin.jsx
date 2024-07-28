import { useNavigate } from 'react-router-dom';

const PreLogin = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToLogin = () => {
    navigate('login'); // 로그인 페이지로 이동
  };

  return (
    <div>
      <h1>Pre-Login Page하십시옹</h1>
      <button onClick={goToLogin}>Go to Login해요잉</button>
    </div>
  );
};

export default PreLogin;