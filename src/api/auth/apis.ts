import { api } from "../../config/axios";
import { 
    SignUpRequestBody,
    SendEmailCodeRequestBody,
    VerifyEmailCodeRequestBody,
    VerifyEmailCodeParams
} from "./types";

export function SignUp(req: SignUpRequestBody): Promise<void> {
    return api.post('/auth/signup', req);
}

export function SendEmailCode(req: SendEmailCodeRequestBody): Promise<void> {
    return api.post('/auth/email', req);
}

export function VerifyEmailCode(
    req: VerifyEmailCodeRequestBody, 
    params: VerifyEmailCodeParams
): Promise<void> {
    return api.post('/auth/email/verify', req, {
        params: {
            ...params
        }
    });
}