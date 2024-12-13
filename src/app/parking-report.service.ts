import { Injectable } from '@angular/core';
import { UserParkingReportI } from 'src/assets/parkingReport/UserParkingReportI';

@Injectable({
  providedIn: 'root'
})
export class ParkingReportService {

  private parkingReport : UserParkingReportI = {

    responseCode: "",
    responseDescription: "",
    message: null,
    data: [],
  };


  constructor() {}


  setReport(report : any) {

    this.parkingReport = report;
  }

  getReport() {

    return this.parkingReport;
  }

}
