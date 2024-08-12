import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
    <form className="login_form">
      <button onClick={goToMain}>로그인</button>
    </form>
  );
};

export default Login;
