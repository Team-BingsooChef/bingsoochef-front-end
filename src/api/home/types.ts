export interface ToppingTypesResponseBody {
  toppingTypes: [
    {
      toppingTypeId: number;
      toppingTypeCategory: string;
      toppingTypeName: string;
      frozenImg: string;
      defrostedImg: string;
    }
  ];
}

// 토핑목록 조회
export interface ToppingResponseBody {
    //totalElements: 빙수의 토핑 개수 page index (0..N)
  currPage: number;
  totalPages: number;
  totalElements: number;
  toppings: [
    {
      toppingId: number;
      toppingTypeId: number;
      chefName: "string";
      toppingTitle: "string";
      toppingPosition: number;
      isHidden: boolean;
    }
  ];
}

export type ToppingType = {
    toppingId: number;
    toppingTypeId: number;
    chefName: string;
    toppingTitle: string;
    toppingPosition: number;
    isHidden: boolean;
    };
