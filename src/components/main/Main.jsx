import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar";
import homeicon from "/src/assets/icon/homeicon.svg";
import menuicon from "/src/assets/icon/menuicon.svg";
import Bingsoo from "./Bingsoo";
import SelectTP from "../modal/chef/SelectTP";
import WriteTP from "../modal/chef/WriteTP";
import QuizOrNot from "../modal/chef/QuizOrNot";
import QuizSelect from "../modal/chef/QuizSelect";
import QuizMakeOX from "../modal/chef/QuizMakeOX";
import QuizMakeMult from "../modal/chef/QuizMakeMult";
import SetChefName from "../modal/chef/SetChefName";
import axios from "axios";

const Main = () => {
  const [toppings, setToppings] = useState([]);
  useEffect(() => {
    // 백엔드에서 토핑 리스트를 가져오는 API 호출
    fetchToppings();
  }, []);

  // console.log("Toppings:", toppings);

  const fetchToppings = async () => {
    // API 요청 코드 - 실제로는 fetch나 axios를 사용해 데이터를 가져옴
    const sampletoppingData = [
      {
        id: 1,
        from: "인도공주현정",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: false,
        replied: false,
        topping: "mochi",
        currentPage: 0,
        totalPage: 2,
        isQuiz: true,
        isQuizOpen: false,
        quizID: 1,
      },
      {
        id: 2,
        from: "다래끼왕동운",
        content: "나 눈 야구공에 맞았어",
        opened: true,
        replied: false,
        topping: "oreo",
        currentPage: 0,
        totalPage: 2,
        isQuiz: false,
        isQuizOpen: false,
      },
      {
        id: 3,
        from: "좌절한희연이",
        content:
          "언제나 너의 노력을 지켜보며 감동하고 있어. 힘들고 지칠 때도 있지만, 너는 언제나 꿋꿋이 이겨내고 있어 정말 대단해. 지금까지 걸어온 길이 절대 헛되지 않았다는 걸 알았으면 해. 너의 열정과 끈기는 반드시 좋은 결과로 이어질 거야. 나는 항상 네 편이고, 네가 하는 모든 일이 잘되길 진심으로 응원해. 너의 꿈을 향해 나아가는 길이 빛나도록 언제나 함께할게. 힘내, 희연아! 너라면 무엇이든 해낼 수 있어!",
        opened: true,
        replied: true,
        topping: "strawberry",
        currentPage: 0,
        totalPage: 2,
        reply: "고마워, 너도 힘내!",
        isQuiz: true,
        isQuizOpen: true,
      },
      {
        id: 4,
        from: "인도BTS상희",
        content:
          "귀하의 위대한 품격과 전통을 찬미하며 저희는 감히 부탁드리고자 합니다. 당신의 뛰어난 춤 실력을 경험할 수 있는 기회를 허락해 주시겠습니까? 인도의 유서 깊은 문화와 우아함을 담아낸 당신의 춤사위는 우리의 마음을 매혹시키고, 그 속에 담긴 아름다움을 느끼고 싶습니다. 우리에게 영감을 주고 기쁨을 안겨줄 당신의 춤을 감상할 수 있도록 허락해 주시길 간청드립니다. 상희님의 춤이 이곳을 빛낼 것을 믿어 의심치 않습니다.",
        opened: false,
        replied: false,
        topping: "kiwi",
        currentPage: 0,
        totalPage: 2,
        isQuiz: true,
        isQuizOpen: false,
        quizID: 2,
      },
      {
        id: 5,
        from: "인도공주현정",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: false,
        replied: false,
        topping: "banana",
        currentPage: 0,
        totalPage: 2,
        isQuiz: true,
        isQuizOpen: false,
        quizID: 3,
      },
      {
        id: 6,
        from: "인도공주현정",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: true,
        replied: false,
        topping: "chex",
        currentPage: 0,
        totalPage: 2,
        isQuiz: false,
        isQuizOpen: false,
      },
      {
        id: 7,
        from: "인도공주현정",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: false,
        replied: false,
        topping: "marshmallow",
        currentPage: 0,
        totalPage: 2,
        isQuiz: true,
        isQuizOpen: false,
        quizID: 4,
      },
      {
        id: 8,
        from: "인도공주현정",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: false,
        replied: false,
        topping: "mango",
        currentPage: 0,
        totalPage: 2,
        isQuiz: false,
        isQuizOpen: false,
      },
      {
        id: 9,
        from: "인도공주현정",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: false,
        replied: false,
        topping: "mango",
        currentPage: 1,
        totalPage: 2,
        isQuiz: false,
        isQuizOpen: false,
      },
      {
        id: 10,
        from: "인도공주gus",
        content:
          "늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: false,
        replied: false,
        topping: "mango",
        currentPage: 1,
        totalPage: 2,
        isQuiz: false,
        isQuizOpen: false,
      },
    ];
    //toppingData 배열 접어둠
    setToppings(sampletoppingData);
  };

  // const {URLbingsooId} = useParams();
  // const [UserbingsooId, setUserBingsooId] = useState(null);
  const navigate = useNavigate();
  const [role, setRole] = useState("owner");
  // 일단 여기서 role을 owner로 설정해놓았습니다. 나중에 수정해주세요.
  //chef view 볼 거면 chef로 해놓고 userID는 나중에 연결

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
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [isWriteOpen, setWriteOpen] = useState(false);
  const [isQuizOrNotOpen, setQuizOrNotOpen] = useState(false);
  const [isQuizSelectOpen, setQuizSelectOpen] = useState(false);
  const [isQuizMakeOXOpen, setQuizMakeOXOpen] = useState(false);
  const [isQuizMakeMultOpen, setQuizMakeMultOpen] = useState(false);
  const [isSetChefNameOpen, setChefNameOpen] = useState(false);

  const handleCloseSelect = () => {
    setSelectOpen(false);
  };

  const handleModalSelect = () => {
    setSelectOpen(true);
    setWriteOpen(false);
  };

  const handleCloseWrite = () => {
    setWriteOpen(false);
  };

  const handleWriteOpen = () => {
    setWriteOpen(true);
    setQuizOrNotOpen(false);
  };

  const handleQONOpen = () => {
    setQuizOrNotOpen(true);
    setQuizSelectOpen(false);
  };
  const handleSTPCompletion = () => {
    setSelectOpen(false);
    setWriteOpen(true);
  };

  const handleWCompletion = () => {
    setWriteOpen(false);
    setQuizOrNotOpen(true);
  };

  const handleCloseQON = () => {
    setQuizOrNotOpen(false);
  };

  const handleQONCompletion = () => {
    setQuizOrNotOpen(false);
    setQuizSelectOpen(true);
  };

  const handleQSoxCompletion = () => {
    setQuizSelectOpen(false);
    setQuizMakeOXOpen(true);
  };

  const handleQSmultCompletion = () => {
    setQuizSelectOpen(false);
    setQuizMakeMultOpen(true);
  };

  const handleCloseMakeOX = () => {
    setQuizMakeOXOpen(false);
  };

  const handleCloseMakeMult = () => {
    setQuizMakeMultOpen(false);
  };

  const handleCloseChefName= () => {
    setChefNameOpen(false);

  };


  const handleQuizSelect = () => {
    setQuizMakeMultOpen(false);
    setQuizMakeOXOpen(false);
    setQuizSelectOpen(true);
  };

  const handleQMCompletion = () => {
    setChefNameOpen(true);
    setQuizMakeMultOpen(false);
    setQuizMakeOXOpen(false);
  };

  const handleChefNameCompletion = () => {
    setChefNameOpen(false);
    
  };


  const handleNoQuiz = () => {
    setQuizOrNotOpen(false);
    setChefNameOpen(true);
  };

  const goToMine = () => {
    navigate("/main:UserbingsooId");
  };
  // 자기 자신의 빙수 ID로 즉, owner 입장에서의 home에 가는 것
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
      <div className={styles.ownerWrapper}>
        <Sidebar />
        <div className={styles.container}>
          <Bingsoo toppings={toppings} viewType="owner" />
          <button className={styles.copybutton} onClick={copyURL}>
            공유하기
          </button>
        </div>
      </div>
    );
  };

  const ChefView = () => {
    return (
      <div className={styles.chefWrapper}>
        <button className={styles.homebutton} onClick={goToMine}>
          <img src={homeicon} alt="Icon" />
        </button>
        <div className={styles.container}>
          <label className={styles.Ctoplabel}>
            사랑하는 admin의 빙수를 완성시켜 주세요
          </label>
          {/* 빙수와 토핑 렌더링, 토핑 클릭 불가능하게 설정 */}
          <Bingsoo toppings={toppings} viewType="chef" />
          <button className={styles.addbutton} onClick={handleModalSelect}>
            토핑 추가하기
          </button>
          {isSelectOpen && (
            <SelectTP
              isOpen={isSelectOpen}
              onClose={handleCloseSelect}
              onSelectSuccess={handleSTPCompletion}
            />
          )}

          {isWriteOpen && (
            <WriteTP
              isOpen={isWriteOpen}
              onClose={handleCloseWrite}
              goBack={handleModalSelect}
              onWriteSuccess={handleWCompletion}
            />
          )}
          {isQuizOrNotOpen && (
            <QuizOrNot
              isOpen={isQuizOrNotOpen}
              onClose={handleCloseQON}
              goBack={handleWriteOpen}
              onQONSuccess={handleQONCompletion}
              noQuiz={handleNoQuiz}
            />
          )}
          {isQuizSelectOpen && (
            <QuizSelect
              isOpen={isQuizSelectOpen}
              onClose={handleCloseSelect}
              goBack={handleQONOpen}
              onQSoxSuccess={handleQSoxCompletion}
              onQSmultSuccess={handleQSmultCompletion}
            />
          )}

          {isQuizMakeOXOpen && (
            <QuizMakeOX
              isOpen={isQuizMakeOXOpen}
              onClose={handleCloseMakeOX}
              goback={handleQuizSelect}
              onQuizMakeSuccess={handleQMCompletion}
            />
          )}

          {isQuizMakeMultOpen && 
          <QuizMakeMult 
          isOpen={isQuizMakeMultOpen}
          onClose={handleCloseMakeMult}
          goback={handleQuizSelect}
          onQuizMakeSuccess={handleQMCompletion}/>}

          
          {isSetChefNameOpen && 
          <SetChefName 
          isOpen={isSetChefNameOpen}
          onClose={handleCloseChefName}
          onChefNameSuccess={handleChefNameCompletion}/>}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main_display}>
      <div className={styles.main_form}>
        {role === "owner" ? <OwnerView /> : <ChefView />}
      </div>
    </div>
  );
};

export default Main;
