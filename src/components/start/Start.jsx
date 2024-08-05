import './Start.css'
import { useNavigate } from 'react-router-dom';

const Startpage = () => {
  const navigate = useNavigate();

  const goToPreLogin = () => {
    navigate('prelogin'); // 로그인 페이지로 이동
  };


    return (
      <form className="start_form">
      <div>
        <h1>녹지마 빙수야!</h1>
        <button onClick={goToPreLogin}>시작하기</button>
      </div>
      </form>
    );
  };
  
  export default Startpage;