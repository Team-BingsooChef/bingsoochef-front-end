import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startpage from "./components/start/Start";
import PreLogin from "./components/prelogin/PreLogin";
import Login from "./components/login/Login";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="prelogin" element={<PreLogin />}/>
          <Route path="/prelogin/login" element={<Login />} />

       </Routes>
      </Router>
      
  );
}

export default App
