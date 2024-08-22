import React, { useState } from 'react';
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 프로그래밍적 내비게이션을 구현합니다.
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = async (event) => {
    setQuery(event.target.value);

    if (event.target.value.length > 0) {
      // 백엔드와 통신하여 검색 결과를 가져오는 부분
      // 아래는 예시 데이터이며 실제로는 API 호출을 통해 받아옵니다.
      const sampleResults = [
        { id: 1, name: '인도공주현정', image: '/src/assets/icon/chef.svg' },
        { id: 2, name: '인도받탄상회', image: '/src/assets/icon/chef.svg' },
        { id: 3, name: '무인도에고양이', image: '/src/assets/icon/chef.svg' },
        { id: 4, name: '인도인도인', image: '/src/assets/icon/chef.svg' },
      ];

      setResults(sampleResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (id) => {
    // 해당 유저의 빙수 페이지로 이동
    navigate(`/bingsoo/${id}`);
  };


  const goToMain = () => {
    navigate('/main'); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.searchDisplay}>
    <div className={styles.searchForm}>
      <div className={styles.wrapper}>

        <div className={styles.top}>
          <label>빙수 찾아 떠나기</label>
          <button className={styles.homebtn} onClick={goToMain}>
            <img src={'/src/assets/icon/homeicon.svg'} alt="Icon"></img>
          </button>
      </div>
      
       <div className={styles.searchWrapper}>
       <label>다른 사람의 빙수를 구경해 보세요 </label>
       <input
              className={styles.input}
              type="search"
              value={query}
              onChange={handleSearch}
              placeholder="닉네임 검색"
            ></input>
        </div>
        <div className={styles.resultWrapper}>
          {results.map((result) => (
              <div
                key={result.id}
                className={styles.resultItem}
                onClick={() => handleResultClick(result.id)}
              >
                <img src={result.image} alt={result.name} />
                <span>{result.name}</span>
          </div>
           ))}
    </div>
  </div>
  </div>
  </div>
  );
};

export default Search;