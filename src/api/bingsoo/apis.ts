import { api } from "../../config/axios";

import {  
    CreateBingsooRequestBody,
    ChangeFlavorRequestBody,
    QueryBingsooResponseBody } from "./types";



export function CreateBingsoo(req: CreateBingsooRequestBody): Promise<void> {
    return api.post('/users/bingsoo', req);
}

export function ChangeFlavor(req: ChangeFlavorRequestBody): Promise<void> {
    return api.patch('/users/bingsoo', req);
}

export async function QueryBingsoo(bingsooId: number): Promise<QueryBingsooResponseBody> {
    const res = await api.get(`/users/bingsoo/${bingsooId}`);
    return res.data;
}
