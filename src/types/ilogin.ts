export interface Ilogin{
    userId: string;
    password: string;
    accessToken: string;
    refreshToken: string;
    username: string;
    loading: boolean;
}

export interface ISigninParam {
    userId: string;
    password: string;
}