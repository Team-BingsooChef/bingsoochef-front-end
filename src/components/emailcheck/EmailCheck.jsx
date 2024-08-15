import { useState, useEffect } from 'react';
import './EmailCheck.css'
import { useNavigate, useLocation } from 'react-router-dom';



const EmailCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
 // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.
  const [emailcheck, setEmailcheck] = useState([]);
  const [inputCode, setInputCode] = useState('');
  const afterCheck =() => {
    if (location.pathname === '/prelogin/createaccount/emailcheck') {
      navigate('setpassword');
    } else if (location.pathname === '/findpassword/emailcheck') {
      navigate('resetpassword');
    }
  }

  useEffect(() => {
    fetch('/public/data/productData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setEmailcheck(data);
      });
  }, []);

  const handleChange = (e) => {
    setInputCode(e.target.value); // 코드 입력될때마다 업데이트 하는 역할
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지하기
    if (emailcheck.length > 0 && inputCode === emailcheck[0].code.toString()) { // 코드 일치 여부 확인
      navigate('setpassword'); //일치하면 페이지 이동
    } else {
      alert('코드가 일치하지 않습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className='emailcheck_display'>
    <form className='emailcheck_form'>
      <label>인증하기</label>
      <p>이메일 인증을 위한 코드가 발급되었습니다<br />
        전달받은 코드를 5분 안에 입력해주세요.
      </p>
      <input type="text" value={inputCode} onChange={handleChange} />
      <button type="submit" onClick={afterCheck}>인증하기</button> 
    </form>
    </div>
  );
};

export default EmailCheck;