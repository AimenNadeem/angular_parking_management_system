import { ParkersDataI } from "./ParkersDataI";

export interface ParkersRecordsDataI {

    responseCode: string,
    responseDescription: string,
    message: null,
    data: ParkersDataI[]
}
