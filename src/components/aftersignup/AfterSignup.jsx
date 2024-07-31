import './AfterSignup.css'
import { useNavigate } from 'react-router-dom';

const AfterSignup = () => {
  const navigate = useNavigate(); 

  const goToMain = () => {
    navigate('/main'); 
  };

  return (
    <form className='aftersignup_form'>
      <button  onClick={goToMain}>완료</button>
    </form>
  );
};

export default AfterSignup;