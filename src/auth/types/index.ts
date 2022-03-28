export type TokenResponse = {
    authToken: string;
    refreshToken: string;
};

export type LoginUser = {
    password: string;
    email: string;
};