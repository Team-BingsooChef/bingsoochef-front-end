import { useState, useEffect, useRef } from "react";
import styles from "./EmailCheck.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import gotobackicon from "/src/assets/icon/gotobackicon_white.svg";
const EmailCheck = () => {
  const inputRefs = useRef([]);
  // inputRefs는 배열로 각 입력 필드의 ref를 저장하기 위해 사용
  const handleInputChange = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  //   e.target.value.length > 0은 사용자가 한 자리수를 입력했는지 확인합니다.
  // 만약 입력이 이루어졌고, 현재 인덱스가 마지막 입력칸이 아니라면, inputRefs.current[index + 1].focus();를 통해 다음 입력칸으로 포커스를 이동시킵니다.
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const [timeLeft, setTimeLeft] = useState(300); // 300초 = 5분
  const [timeExpired, setTimeExpired] = useState(false); // 시간을 다 썼는지 여부
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // 컴포넌트가 언마운트되거나 시간이 변경될 때 타이머를 정리
    } else {
      setTimeExpired(true); // 시간이 다 되면 상태를 true로 설정
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}분 ${secs < 10 ? `0${secs}` : secs}초`;
  };

  const handleResend = () => {
    // 여기서 다시 전송하는 로직을 추가할 수 있습니다.
    alert("이메일 인증 코드를 다시 발송했습니다.");
    setTimeLeft(300); // 시간을 다시 5분으로 리셋
    setTimeExpired(false); // 만료 상태 초기화
  };

  const navigate = useNavigate();
  const location = useLocation();
  // setpassword랑 resetpassword 네비게이션 다르게 해야 해서
  const [emailcheck, setEmailcheck] = useState([]);
  const [inputCode, setInputCode] = useState("");
  const afterCheck = () => {
    if (location.pathname.includes("createaccount/emailcheck")) {
      navigate("setpassword");
    } else if (location.pathname.includes("findpassword/emailcheck")) {
      navigate("resetpassword");
  }
};

  useEffect(() => {
    fetch("/public/data/productData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEmailcheck(data);
      });
  }, []);

  const handleChange = (e) => {
    setInputCode(e.target.value); // 코드 입력될때마다 업데이트 하는 역할
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지하기
    if (emailcheck.length > 0 && inputCode === emailcheck[0].code.toString()) {
      // 코드 일치 여부 확인
      navigate("setpassword"); //일치하면 페이지 이동
    } else {
      alert("코드가 일치하지 않습니다. 다시 시도해주세요.");
    }
  };

  const goToBack = (e) => {
    e.preventDefault();
    window.history.back(); // 로그인 페이지
  };

  return (
    <div className={styles.emailcheck_display}>
      <div className={styles.emailcheck_form}>
        <div className={styles.top}>
          <button className={styles.back} onClick={goToBack}>
            <img src={gotobackicon} alt="Icon"></img>
          </button>
          <div className={styles.title}>
            <label>인증하기</label>
          </div>
        </div>
        <p className={styles.text_top}>
          이메일 인증을 위한 코드가 발급되었습니다
          <br />
          전달받은 코드를 5분 안에 입력해주세요
          <br />
          <br />
          bingsoochef@gmail.com 로 코드를 보냈습니다
        </p>
        <div className={styles.inputs_container}>
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              className={styles.code_input}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        {/* <input type="text" value={inputCode} onChange={handleChange} /> */}
        <p className={styles.time}>
          코드 입력까지 {formatTime(timeLeft)} 남았습니다
        </p>
        {timeExpired && (
          <div className={styles.timeExpiredMessage}>
            <p>입력 시간이 끝났습니다. 다시 메일을 전송할까요?</p>
            <label className={styles.resendButton} onClick={handleResend}>
              다시 전송
            </label>
          </div>
        )}
        <button
          className={styles.aftercheck}
          type="submit"
          onClick={afterCheck}
        >
          인증하기
        </button>
        <div className={styles.codeagain}>
          <label>메일이 전송되지 않았나요?</label>
          <button> 다시 전송 </button>
        </div>
      </div>
    </div>
  );
};

export default EmailCheck;
