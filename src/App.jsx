import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startpage from "./components/start/Start";
import PreLogin from "./components/prelogin/PreLogin";
import Login from "./components/login/Login";
import CreateAccount from "./components/createaccount/CreateAccount";
import EmailCheck from "./components/emailcheck/EmailCheck";
import SetPassword from "./components/setpassword/SetPassword";
import AfterSignup from "./components/aftersignup/AfterSignup";
import FindPassword from "./components/findpassword/FindPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/prelogin" element={<PreLogin />} />
        <Route path="/prelogin/login" element={<Login />} />
        <Route path="/prelogin/createaccount" element={<CreateAccount />} />
        <Route
          path="/prelogin/createaccount/emailcheck"
          element={<EmailCheck />}
        />
        <Route
          path="/prelogin/createaccount/emailcheck/setpassword"
          element={<SetPassword />}
        />
        <Route
          path="/prelogin/createaccount/emailcheck/setpassword/aftersignup"
          element={<AfterSignup />}
        />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/findpassword/emailcheck" element={<EmailCheck />} />
        <Route path="/findpassword/emailcheck/resetpassword" element={<ResetPassword />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
