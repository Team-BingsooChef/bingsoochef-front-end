import styles from "./Setting.module.css";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.

  const goToMain = () => {
    navigate("/main"); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.settingDisplay}>
      <div className={styles.settingForm}>
        <div className={styles.wrapper}>


          <div className={styles.top}>
            <label>계정 설정 </label>
            <button className={styles.homebtn} onClick={goToMain}>
              <img src={"/src/assets/icon/homeicon.svg"} alt="Icon"></img>
            </button>
          </div>

          <div className={styles.topWrapper}>
            <p style={{color: '#1581A3', fontSize: 24, marginRight: 5}}>Admin</p>
            <p style={{fontSize: 24}}>님</p>
            <img src={"/src/assets/icon/chef.svg"} alt="Icon"></img>
            <label>사진 수정</label>
          </div>


          <div
            style={{
              borderTop: "2px solid #777C89",
              width: "90%",
              margin: "20px 0",
            }}
          ></div>

          <div className={styles.bodyWrapper1}>
            <div className={styles.bodyWrapper1_1}>
              <label style={{color: '#03526B'}}>닉네임</label>
              <label className={styles.change1}>변경</label>
            </div>
            <input
              className={styles.inputn}
              type="text"
              placeholder="현재 닉네임"
            ></input>
            <div className={styles.bodyWrapper1_2}>
              <label style={{color: '#03526B'}}>비밀번호</label>
              <label className={styles.change2}>변경</label>
            </div>
            <input
              className={styles.inputp}
              type="password"
              placeholder="변경할 비밀번호를 입력해 주세요"
            ></input>
          </div>

          <div
            style={{
              borderTop: "2px solid #777C89",
              width: "90%",
              margin: "20px 0",
            }}
          ></div>

          <div className={styles.bodyWrapper2}>
            <label className={styles.textbW2}>내 빙수 설정</label>
            <div className={styles.bodyWrapper2_1}>
              <label>내 빙수 검색 허용</label>
              <label className={styles.perm}>허용</label>
            </div>
          </div>

          <div
            style={{
              borderTop: "2px solid #777C89",
              width: "90%",
              margin: "20px 0",
            }}
          ></div>

          <div className={styles.bottomWrapper}>
            <label className={styles.leave}>로그아웃</label>
            <label className={styles.delete}>회원 탈퇴</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
