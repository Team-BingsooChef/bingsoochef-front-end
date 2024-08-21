import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import Sidebar from './Sidebar';
import menuicon from '/src/assets/icon/menuicon.svg';
import Bingsoo from './Bingsoo';


const Main = () => {
  const navigate = useNavigate();
  const copyURL = async () => {
    event.stopPropagation();
    try {
      // 현재 페이지의 URL을 가져와 클립보드에 복사
      await navigator.clipboard.writeText(window.location.href);
      alert("URL이 복사되었습니다!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="main_display">
    <div className="main_form">
    <Sidebar />
    <div className="container">
     <Bingsoo /> 
      <button type="button" className="copybutton" onClick={copyURL}>
        공유하기
      </button>
      
      </div>
    </div>
    </div>
  );
};

export default Main;
