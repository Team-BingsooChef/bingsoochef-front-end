import React, {useState, useEffect} from 'react';
import styles from './OpenQuiz.module.css';

const OpenQuiz = ({isOpen, onClose, id}) => {
  if (!isOpen) return null;
  const [quizType, setQuizType] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [quizQ, setQuizQ] = useState("");
  const [quizA, setQuizA] = useState("");
  const [quizChoices, setQuizChoices] = useState([]);

  useEffect(() => {
    // 백엔드에서 토핑 리스트를 가져오는 API 호출
    fetchToppings();
  }, []);
  const fetchToppings = async () => {
    // API 요청 코드 - 실제로는 fetch나 axios를 사용해 데이터를 가져옴
    const sampleQuizData = [
      {
        id: 1,
        isQuiz: true,
        isQuizOpen: false,
        quizType: "ox",
        quizQ: "9월도 여름입니까?",
        quizA: "O",
      },
      {
        id: 2,
        isQuiz: true,
        isQuizOpen: false,
        quizType: "Multiple",
        quizQ: "다음 중 가장 큰 숫자는?",
        quizA: "3",
        quizChoices: ["1", "2", "3", "4"],
      }
      
    ];
    setQuiz(sampleQuizData);
    setQuizType(sampleQuizData[id-1].quizType);
    setQuizQ(sampleQuizData[0].quizQ);
    setQuizA(sampleQuizData[0].quizA);
    setQuizChoices(sampleQuizData[1].quizChoices);

  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const OX = () =>{
    return(
        
        <div className={styles.modalContent}>
        <button> O </button>
        <button> X </button>
        <button onClick={onClose} className={styles.closeButton}>닫기</button>
      </div>
      
    );
  };

  const Multiple = () =>{
    return(
        <div className={styles.modalContent}>
     
        <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> 4 </button>
        <button onClick={onClose} className={styles.closeButton}>닫기</button>
      </div>
  
    );
  };

  return (
    <>
        {quizType === "ox" ? <OX /> : <Multiple />}
        </>
  );
};

export default OpenQuiz;