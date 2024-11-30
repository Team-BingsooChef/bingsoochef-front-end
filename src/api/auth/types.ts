export interface SignUpRequestBody {
    username: string;
    password: string;
};

export interface SendEmailCodeRequestBody {
    email: string;
};

export interface VerifyEmailCodeRequestBody {
    email: string;
};

export interface VerifyEmailCodeParams {
    code: string;
};