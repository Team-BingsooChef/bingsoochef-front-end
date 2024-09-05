import React, {useState} from 'react';
import styles from './ReplyLetter.module.css';
import backicon from '/src/assets/icon/gotobackicon_white.svg';

const ReplyLetter = ({isOpen, onClose, from}) => {
  if (!isOpen) return null;
  const [inputValue, setInputValue] = useState('');  // 입력 값 관리
  const [charCount, setCharCount] = useState(0);     // 현재 글자 수 관리
  const maxChars = 30;                               // 최대 글자 수 설정

  const handleInputChange = (e) => {
    const value = e.target.value;
    const charLength = value.length;  // 글자 수 계산      
    let byteLength = new TextEncoder().encode(value).length;  // 입력 값의 바이트 수 계산

    if (charLength <= maxChars) {  // 최대 글자 수를 초과하지 않으면 입력 값 업데이트
      setInputValue(value);
      setCharCount(charLength);
    }
  };



  return (
    

    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
       <div className={styles.top}>
          <button className={styles.back} onClick={onClose}>
            <img src={backicon} alt="back" />
          </button>
          <label>답장 작성 </label>
        </div>
        <div className={styles.to}>
          <p>To.</p>
          <p>{from}</p> 
          {/* from이지만, 답장을 받는 사람임 */}
        </div>
    <div className={styles.replyContent}>
      <input 
        className={styles.replyText}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="답장을 작성해주세요"/>
         <p>{charCount} / {maxChars} 글자 </p>      {/* 현재 글자 수 표시 */}
      </div>
        <button onClick={onClose} className={styles.closeButton}>닫기(완료가 될)</button>
      </div>
  );
};

export default ReplyLetter;