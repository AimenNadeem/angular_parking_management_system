import { ParkingDataI } from "./ParkingDataI";

export interface ParkingI {
   
    responseCode: string,
    responseDescription: string,
    message: null,
    data: ParkingDataI[],
  }
