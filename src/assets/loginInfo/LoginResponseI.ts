import { UserLoginDataI } from "./UserLoginDataResponseI";

export interface LoginResponseI {

    responseCode: string,

    responseDescription: string,

    message: string,

    token: string,

    data: UserLoginDataI[],
};
