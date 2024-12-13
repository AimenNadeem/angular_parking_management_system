import { RanksData } from "./RanksData";

export interface RanksI {
    
    responseCode: string,
    responseDescription: string,
    message: string,
    data: RanksData[],
};
