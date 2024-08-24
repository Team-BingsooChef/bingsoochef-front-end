import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.css";
import Sidebar from './Sidebar';
import menuicon from '/src/assets/icon/menuicon.svg';
import Bingsoo from './Bingsoo';



const Main = () => {
  const {URLbingsooId} = useParams();
  const [UserbingsooId, setUserBingsooId] = useState(null);
  const navigate = useNavigate();
  const [role, setRole] = useState('owner');

  // const [role, setRole] = useState(null);
  // useEffect(() => {
  //   // 여기서 실제 로그인 후 사용자 빙수 ID를 서버에서 받아옵니다.
  //   // 예를 들어, API 호출을 통해 가져올 수 있습니다.
  //   // 이 예제에서는 하드코딩된 값으로 대체합니다.
  //   const fetchUserBingsooId = async () => {
  //     // 예시로 API 호출하여 사용자 빙수 ID를 가져옴
  //     const response = await fetch('/api/user-bingsoo-id'); 
  //     const data = await response.json();
  //     setUserBingsooId(data.UserbingsooId); // 가져온 사용자 빙수 ID를 상태로 설정
  //   };

  //   fetchUserBingsooId();
  // }, []);

  // useEffect(() => {
  //   if (UserbingsooId !== null) {
  //     // 사용자의 빙수 ID와 URL의 빙수 ID를 비교하여 역할 설정
  //     if (UserbingsooId === URLbingsooId) {
  //       setRole('owner');
  //     } else {
  //       setRole('chef');
  //     }
  //   }
  // }, [UserbingsooId, URLbingsooId]);

  // if (role === null) {
  //   // 로딩 상태 처리
  //   return <div>Loading...</div>;
  // }

  const OwnerView = () => {
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
        <div className="ownerWrapper">
        <Sidebar />
        <div className="container">
        <Bingsoo />
        <button className="copybutton" onClick={copyURL}>공유하기</button>
      </div>
      </div>
    );
  };

  const ChefView = () => {
    return (
      <div className="chefWrapper">
        <div className="container">
          {/* 빙수와 토핑 렌더링, 토핑 클릭 불가능하게 설정 */}
          <Bingsoo />
          </div>

        <button className="copybutton">토핑 추가하기</button>
      </div>
    );
  };



  return (
    <div className="main_display">
    <div className="main_form">
    {role === 'owner' ? (
        <OwnerView />
      ) : (
        <ChefView />
      )}
    </div>
    </div>
  );
};

export default Main;

