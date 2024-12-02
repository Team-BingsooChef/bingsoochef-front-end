import { api } from "../../config/axios"
import { 
    QueryQuizResponseBody, 
    QueryQuizParams,
    SendAnswerRequestBody,    
    SendAnswerResponseBody
} from "./types"

export async function QueryQuiz(params: QueryQuizParams): Promise<QueryQuizResponseBody>{
    const response = await api.get<QueryQuizResponseBody>("/users/bingsoos/toppings/${params.toppingId}/quiz", {
    params: {
        "user-id": params.userId,
    } 
});
    return response.data;
};

export function SendAnswer(req: SendAnswerRequestBody): Promise<SendAnswerResponseBody> {
    return api.post<SendAnswerResponseBody>('/users/bingsoos/toppings/quiz', req)
    .then((res)=> res.data)
}