import React, {useState, useEffect, useRef} from 'react';
import styles from './OpenQuiz.module.css';
import { useNavigate } from 'react-router-dom';
import back from '/src/assets/icon/gotobackicon_white.svg';


const OpenQuiz = ({isOpen, onClose, id, onQuizSuccess}) => {
  if (!isOpen) return null;

  const [modalType, setModalType] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [quizType, setQuizType] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [quizQ, setQuizQ] = useState("");
  const [quizA, setQuizA] = useState("");
  const [quizChoices, setQuizChoices] = useState([]);

  const timeoutRef = useRef(null);

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
        quizChoices: ["1", "2", "3", "8"],
      }
      
    ];
    setQuiz(sampleQuizData);
    setQuizType(sampleQuizData[id-1].quizType);
    setQuizQ(sampleQuizData[id-1].quizQ);
    setQuizA(sampleQuizData[id-1].quizA);
    setQuizChoices(sampleQuizData[id-1].quizChoices);

  };

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetModalTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 이전 타이머 취소
    }
    timeoutRef.current = setTimeout(() => {
      setModalType(null); // 2초 후에 modalType을 null로 설정
    }, 2000); // 2000ms = 2초
  };
  const handleOCorrectAnswer = () => {
    if (quizA === "O") {
      setModalType('correct');
      onQuizSuccess();
    } else {
      setModalType('incorrect');
    }

    resetModalTimeout(); // 타이머 초기화 및 재설정
  };
  

  const handleXCorrectAnswer = () => {
    if (quizA === "X") {
      setModalType('correct');
      onQuizSuccess();
    } else {
      setModalType('incorrect');
    }

    resetModalTimeout(); // 타이머 초기화 및 재설정
  };
  
  const handleMCorrectAnswer = (answer) => () =>  {
    setSelectedAnswer(answer);
    if (quizA === answer) {
      setModalType('correct');
      onQuizSuccess();
    } else {
      setModalType('incorrect');
    }

    resetModalTimeout(); // 타이머 초기화 및 재설정
  };


  const OX = () =>{
    return(
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
           <div className={styles.top} >
           <label>퀴즈</label>
        </div>
        <div className={styles.quizQ}>
          <p>Q.</p>
          <p>{quizQ}</p>
          </div>
        
        <button  onClick={handleOCorrectAnswer}> O </button>
        <button  onClick={handleXCorrectAnswer}> X </button>
        {modalType === 'correct' && (
        <div className="modal">
          <p>정답입니다! 토핑이 오픈됩니다.</p>
        </div>
      )}
       {modalType === 'incorrect' &&(
        <div className="modal">
          <p> 땡 틀렸습니다. 다시 시도해 주세요. </p>
        </div>
      )}
        <button onClick={onClose} className={styles.closeButton}>닫기</button>
      </div>
    
      
    );
  };

  const Multiple = () =>{
    return(
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
        <label>퀴즈</label>
        </div>
        <div className={styles.quizQ}>
          <p>{quizQ}</p>
          </div>
        <button  onClick={handleMCorrectAnswer(quizChoices[0])}>  {quizChoices[0]} </button>
        <button  onClick={handleMCorrectAnswer(quizChoices[1])}>  {quizChoices[1]}  </button>
        <button  onClick={handleMCorrectAnswer(quizChoices[2])}>  {quizChoices[2]}  </button>
        <button  onClick={handleMCorrectAnswer(quizChoices[3])}>  {quizChoices[3]}  </button>

        {modalType === 'correct' && (
        <div className="modal">
          <p>정답입니다! 토핑이 오픈됩니다.</p>
        </div>
      )}
       {modalType === 'incorrect' &&(
        <div className="modal">
          <p> 땡 틀렸습니다. 다시 시도해 주세요. </p>
        </div>
      )}
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