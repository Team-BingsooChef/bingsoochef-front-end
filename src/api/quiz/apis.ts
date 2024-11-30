import { api } from "../../config/axios"
import { 
    QueryQuizResponseBody, 
    QueryQuizParams,
    SendAnswerRequestBody,    
    SendAnswerResponseBody
} from "./types"

export async function QueryQuiz(params: QueryQuizParams): Promise<QueryQuizResponseBody>{
    const hyphenParams = {
      "topping-id": params.toppingId, // 하이픈 포함된 키로 변환
      "user-id": params.userId,
    }; 

    api.get("/users/bingsoos/toppings/${params.toppingId}/quiz", {
	params: {
        "user-id": hyphenParams["user-id"],
	} 
})
};

export function SendAnswer(req: SendAnswerRequestBody): Promise<SendAnswerResponseBody> {
    return api.post<SendAnswerResponseBody>('/users/bingsoos/toppings/quiz', req)
    .then((res)=> res.data)
}