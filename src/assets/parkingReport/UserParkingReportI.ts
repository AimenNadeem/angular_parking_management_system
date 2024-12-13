import { ParkingReportDataI } from "./ParkingReportDataI";

export interface UserParkingReportI {
    
    responseCode: string,
    responseDescription: string,
    message: null,
    data: ParkingReportDataI[],

};
