import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import "./buttonStyles.css";

const Main = () => {
  const navigate = useNavigate();

  const copyURL = async () => {
    try {
      // 현재 페이지의 URL을 가져와 클립보드에 복사
      await navigator.clipboard.writeText(window.location.href);
      alert("URL이 복사되었습니다!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      fallbackCopyURL();
    }
  };

  const fallbackCopyURL = () => {
    const url = window.location.href;
    const tempInput = document.createElement("input");
    tempInput.style.position = "fixed"; // 화면 이동 방지
    tempInput.style.top = "0";
    tempInput.style.left = "-9999px";
    tempInput.value = url;
    document.body.appendChild(tempInput);

    const currentScroll = window.scrollY; // 현재 스크롤 위치 저장
    tempInput.focus();
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    window.scrollTo(0, currentScroll); // 스크롤 위치 복원
    alert("URL이 복사되었습니다!");
  };

  return (
    <form className="main_form">
      <h1>메인화면</h1>
      <button type="button" className="copy-button" onClick={copyURL}>
        공유하기
      </button>
    </form>
  );
};

export default Main;
