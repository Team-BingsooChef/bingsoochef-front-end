import { api } from "../../config/axios";
import {
  CreateToppingRequestBody,
  ToppingOutsideResponseBody,
  ToppingOutsideParams,
  ToppingInsideResponseBody,
  ToppingInsideParams
} from "./types";

export function CreateTopping(req: CreateToppingRequestBody): Promise<void> {
  return api.post('/users/bingsoos/toppings', req);
}


export async function QueryToppingOutside(params: ToppingOutsideParams): Promise<ToppingOutsideResponseBody>{

  const res = await api.get('/users/bingsoos/toppings',{
        params:{
            ...params
        }
    });
    return res.data;
}

export async function QueryToppingInside(params: ToppingInsideParams): Promise<ToppingInsideResponseBody>{
  const hyphenParams = {
    "topping-id": params.toppingId, // 하이픈 포함된 키로 변환
    "user-id": params.userId,
  }; 

  const res = await api.get(`/users/bingsoos/toppings/${params.toppingId}`,{
    params: {
    "user-id": hyphenParams["user-id"],
    }
  });
  return res.data;
}

