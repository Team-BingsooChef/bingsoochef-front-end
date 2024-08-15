import "./FindPassword.css";
import { useNavigate } from "react-router-dom";

const FindPassword = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.
  const goToEmailCheck = () => {
    navigate("/findpassword/emailcheck");
  };

  return (
  <div className="findpassword_display">
  <div className="findpassword_form">
  <h1>하이염</h1>
  <button onClick={goToEmailCheck}>다음</button>
  </div>
  </div>
  );
};

export default FindPassword;
