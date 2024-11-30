export interface CreateBingsooRequestBody {
    taste: string;
    userId: string;
  }


  export interface ChangeFlavorRequestBody {
    taste: string;
    userId: string;
  }

  export interface QueryBingsooResponseBody{
    bingsooId: number;
    taste: string;
  }

