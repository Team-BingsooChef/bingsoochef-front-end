//토핑 종류 조회
export interface ToppingTypesResponseBody {
  toppingTypeId: number;
  toppingTypeCategory: string;
  toppingTypeName: string;
  frozenImg: string;
  defrostedImg: string;
}

// 토핑 목록(HomePage 빙수 안에 보이는 정보) : ToppingOutside, 토핑 디테일(토핑 클릭했을 시에): ToppingInside
export interface ToppingOutsideResponseBody {
  //totalElements: 빙수의 토핑 개수 page index (0..N)
  currPage: number;
  totalPages: number;
  totalElements: number;
  toppings: {
    toppingId: number;
    toppingTypeId: number;
    chefName: string;
    toppingTitle: string;
    toppingPosition: number;
    isHidden: boolean;
  }[];
}

export type ToppingOutsideType = {
  toppingId: number;
  toppingTypeId: number;
  chefName: string;
  toppingTitle: string;
  toppingPosition: number;
  isHidden: boolean;
};

export interface ToppingOutsideParams  {
b: number;
}
export interface CreateToppingRequestBody {
  userId: string;
  bingsooId: number;
  topping: {
    chefName: string;
    toppingTitle: string;
    toppingContent: string;
  };
  toppingTypeId: number;
  quiz: {
    quizTitle: string;
    quizType: "OX" | "Multiple";
    questions: {
      first: string;
      second: boolean;
    }[];    
  };
}

export interface ToppingInsideResponseBody {
  topping: {
    toppingId: number;
    chefId: number;
    bingsooId: number;
    toppingTypeId: number;
    chefName: string;
    toppingTitle: string;
    toppingContent: string;
    toppingPosition: number;
    toppingCreatedTime: string; // ISO8601 날짜 문자열
  };
  comment: {
    commentId: number;
    commentContent: string;
    commentCreatedTime: string; // ISO8601 날짜 문자열
  };
}


export interface ToppingInsideParams {
  toppingId: number;  // `topping-id`를 camelCase로 변경
  userId: string; // `user-id`를 camelCase로 변경
}