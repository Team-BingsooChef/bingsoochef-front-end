import React, { useState, useEffect, useRef } from "react";
import styles from "./SeeTPlist.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "/node_modules/swiper/swiper-bundle.min.css";
import "/node_modules/swiper/swiper.min.css";
import { useNavigate } from "react-router-dom";
import SeeReply from "/src/components/seetplist/SeeReply";

const SeeTPlist = () => {
  const [toppings, setToppings] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentReply, setCurrentReply] = useState("");
  const [currentTo, setCurrentTo] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);


  const handleScroll = (e) => {
    const slideHeight = containerRef.current.clientHeight;
    const scrollTop = containerRef.current.scrollTop;
    const newSlideIndex = Math.round(scrollTop / slideHeight);

    if (newSlideIndex !== currentSlide) {
      setCurrentSlide(newSlideIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide]);

  const handleViewReply = (topping) => {
    setModalOpen(true);
    setCurrentReply(topping.reply);
    setCurrentTo(topping.to);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentReply("");
    setCurrentTo("");
  };

  const getImagePath = (topping) => {
    return `/src/assets/toppings/${topping.topping}.svg`;
  };

  
  
  useEffect(() => {
    // 백엔드에서 토핑 리스트를 가져오는 API 호출
    fetchToppings();
  }, []);

  const fetchToppings = async () => {
    // API 요청 코드 - 실제로는 fetch나 axios를 사용해 데이터를 가져옴
    const sampleData = [
      {
        id: 1,
        to: "인도공주현정",
        content:
          "현정 공주님, 늘 당신을 생각하며 마음속 깊이 간직해온 감정을 이제야 전할 용기를 냅니다. 당신의 아름다움과 지혜에 항상 감탄하고, 함께할 때마다 세상이 더욱 빛나는 것을 느낍니다. 저의 작은 존재가 당신 곁에서 행복을 더할 수 있다면 그것만으로도 큰 영광입니다. 당신의 미소가 제 삶에 기쁨을 주고, 당신의 따뜻한 마음이 제게 위로가 됩니다. 공주님을 존경하고 사랑하는 마음이 날마다 깊어집니다. 부디 제 진심을 받아주십시오.",
        opened: 5,
        replied: true,
        topping: "mochi",
        reply: "나도 너를 매일매일 아주 많이 그리워하고 있었어",
      },
      {
        id: 2,
        to: "다래끼왕동운",
        content: "동운아 눈 야구공에 맞았어?",
        opened: 0,
        replied: false,
        topping: "oreo",
      },
      {
        id: 3,
        to: "좌절한희연이",
        content:
          "희연아, 언제나 너의 노력을 지켜보며 감동하고 있어. 힘들고 지칠 때도 있지만, 너는 언제나 꿋꿋이 이겨내고 있어 정말 대단해. 지금까지 걸어온 길이 절대 헛되지 않았다는 걸 알았으면 해. 너의 열정과 끈기는 반드시 좋은 결과로 이어질 거야. 나는 항상 네 편이고, 네가 하는 모든 일이 잘되길 진심으로 응원해. 너의 꿈을 향해 나아가는 길이 빛나도록 언제나 함께할게. 힘내, 희연아! 너라면 무엇이든 해낼 수 있어!",
        opened: 3,
        replied: false,
        topping: "strawberry",
      },
      {
        id: 4,
        to: "인도BTS상희",
        content:
          "인도 왕자 상희님, 귀하의 위대한 품격과 전통을 찬미하며 저희는 감히 부탁드리고자 합니다. 당신의 뛰어난 춤 실력을 경험할 수 있는 기회를 허락해 주시겠습니까? 인도의 유서 깊은 문화와 우아함을 담아낸 당신의 춤사위는 우리의 마음을 매혹시키고, 그 속에 담긴 아름다움을 느끼고 싶습니다. 우리에게 영감을 주고 기쁨을 안겨줄 당신의 춤을 감상할 수 있도록 허락해 주시길 간청드립니다. 상희님의 춤이 이곳을 빛낼 것을 믿어 의심치 않습니다.",
        opened: 3,
        replied: true,
        topping: "mochi",
        reply: "보여주지 나의 기막힌 dance",
      },
    ];
    setToppings(sampleData);
  };

  const handleToppingClick = (id) => {
    // 빙수 주인의 페이지로 네비게이트
    navigate(`/bingsoo/${id}`);
  };

  return (
    <div className={styles.seetplistDisplay}>
      <div className={styles.seetplistForm}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <label>내가 만든 토핑</label>
            <button
              className={styles.homebtn}
              onClick={() => navigate("/main")}
            >
              <img src="/src/assets/icon/homeicon.svg" alt="Home" />
            </button>
          </div>
          <div className={styles.topt}>
            토핑을 누르면, 빙수 주인의 페이지를 방문할 수 있어요
          </div>
          <div ref={containerRef} className={styles.slider}>
              {toppings.map((topping, index) => (
                  <div key={topping.id} className={styles.toppingBox}  
                  style={{
            opacity: currentSlide === index ? 1 : 0.5,
            transform: currentSlide === index ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.3s ease, opacity 0.3s ease'}}>
                    <div className={styles.toppingHeader}>
                      <span>To. {topping.to}</span>
                      <img
                        src={getImagePath(topping)}
                        onClick={() => handleToppingClick(topping.id)}
                      />
                    </div>

                    <div className={styles.toppingContentWrapper}>
                      <div className={styles.toppingContent}>
                        {topping.content}
                      </div>
                    </div>

                    <div className={styles.toppingFooter}>
                      {topping.opened > 0 ? (
                        <div>이 편지는 {topping.opened}번만에 열어봤어요!</div>
                      ) : (
                        <div>편지를 아직 열어보지 않았어요!</div>
                      )}
                      {topping.replied && (
                        <div className={styles.replyNotice}>
                          주인이 답장을 남겼어요!{" "}
                          <button
                            className={styles.replyLink}
                            onClick={() =>
                              handleViewReply(topping)
                            }
                          >
                            보기
                          </button>
                          <SeeReply
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            replyContent={currentReply}
                            to={currentTo}
                          
                          />
                        </div>
                      )}
                    </div>
                  </div>
              
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default SeeTPlist;
