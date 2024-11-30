export interface ToppingTypesResponseBody {
  toppingTypeId: number;
  toppingTypeCategory: string;
  toppingTypeName: string;
  frozenImg: string;
  defrostedImg: string;
}

// 토핑 목록 : ToppingOutside, 토핑 디테일: ToppingInside
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
