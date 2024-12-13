import { UserDataI } from "./UserDataI";

export interface UserResponseDataI {
    
    responseCode: string,
    responseDescription: string,
    message: any,
    data: UserDataI[]
}
