// Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css"; // 스타일을 위한 CSS 파일
import menuicon from "/src/assets/icon/menuicon.svg";
import arrowright from "/src/assets/icon/arrowright.svg";   
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
 
  const goToSetting = () => {
    navigate('/setting');
  };
  const goToSeetplist = () => {
    navigate('/seetplist');
  };
  const goToSearch = () => {
    navigate('/search');
  };
  const goToChangeflavor = () => {
    navigate('/changeflavor');
  };
  const goToIntroduce = () => {
    navigate('/introduce');
  };
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Admin 님</h2>
        <ul>
          <li onClick={goToSetting}>⚙️ 계정 설정</li>
          <li onClick={goToSeetplist}>🍓 내가 만든 토핑</li>
          <li onClick={goToSearch}>🔍 빙수 찾아 떠나기</li>
          <li onClick={goToChangeflavor}>🔄 빙수 맛 변경하기</li>
          <hr />
          <li onClick={goToIntroduce}>👤 포셰프 소개</li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <img src={arrowright} alt="Icon"></img> : <img src={menuicon} alt="Icon"></img>}
      </button>
    </div>
  );
};

export default Sidebar;
