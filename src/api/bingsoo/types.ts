export enum BingsooTaste {
    strawberry = "STRAWBERRY",
    chocolate = "CHOCO",
    milk = "CONDENSED_MILK",
    matcha = "MATCHA",
    MANGO = "MANGO",
    mincho = "MINT_CHOCO",
  }
export interface CreateBingsooRequestBody {
    taste: BingsooTaste;
    userId: string;
  }


  export interface ChangeFlavorRequestBody {
    taste: BingsooTaste;
    userId: string;
  }

  export interface QueryBingsooResponseBody{
    bingsooId: number;
    taste: BingsooTaste;
  }

