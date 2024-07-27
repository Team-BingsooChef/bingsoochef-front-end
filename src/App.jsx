
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PreLogin from "./components/PreLogin";
import Login from "./components/Login";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<PreLogin />} />
          <Route path="prelogin" element={<PreLogin />}/>
          <Route path="/prelogin/login" element={<Login />} />

       </Routes>
      </Router>
      
  );
}

export default App
