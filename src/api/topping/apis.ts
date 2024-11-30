import { api } from "../../config/axios";
import {
  CreateToppingRequestBody,
  ToppingOutsideResponseBody,
  TopppingOutsideParams,
  ToppingInsideResponseBody,
  ToppingOutsideParams,
} from "./types";

export function CreateTopping(req: CreateToppingRequestBody): Promise<void> {
  return api.post('/users/bingsoos/toppings', req);
}


export async function QueryToppingOutside(params: ToppingOutsideParams): Promise<ToppingOutsideResponseBody>{
    const res = await api.get('/users/bingsoo/toppings',{
        params:{
            ...params
        }
    });
    return res.data;
}

export async function QueryToppingInside