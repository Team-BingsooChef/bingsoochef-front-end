export interface QueryQuizResponseBody {
  quiz: {
    quizId: number;
    quizType: string; // "OX" 또는 기타 퀴즈 유형
    quizTitle: string;
    wrongCount: number;
  };
  questions: {
    questionId: number;
    questionContent: string;
  }[];
}

export interface QueryQuizParams {
  toppingId: number;
  userId: number;
}

export interface SendAnswerRequestBody {
  userId: number;
  quizId: number;
  questionId: number;
}

export interface SendAnswerResponseBody {
  result: boolean;
  wrongCount: number;
}
