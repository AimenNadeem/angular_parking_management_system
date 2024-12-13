import { Component, OnInit } from '@angular/core';
import { ParkersDataI } from 'src/assets/carsData/ParkersDataI';
import { ParkersRecordsDataI } from 'src/assets/carsData/ParkersRecordsDataI';
import { RequestsService } from '../requests.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-car-box',
  templateUrl: './car-box.component.html',
  styleUrls: ['./car-box.component.css']
})
export class CarBoxComponent implements OnInit {

  adminStatus : any;

  visibilityStatus : "show" | "hide" | "none" = "none";
  
  imageOfDataNotFound : any = "/assets/pictures/dataNotFound_2.png";

  carParkersData : ParkersDataI = { employeeId: 0, employeeName: 'Empty', vehicleType: 'Empty', vehicleIdentity: 'Empty', parkingName: 'Empty', parkingSpace: 0, parkingLocation: 'Empty', registeredDate: 'Empty'};
  

  carsData : ParkersRecordsDataI = {
    responseCode: "",
    responseDescription: "",
    message: null,
    data: [],
  };

  
  constructor(private requests : RequestsService, private loginService : LoginService) {}

  ngOnInit(): void {

    this.adminStatus = this.loginService.getUserAdminStatus();

    this.getAllCarsRecords();
  }


  getAllCarsRecords() {

    this.requests.getParkers().subscribe({

      next: (next) => {

        this.carsData = next;

        if(this.carsData.data === null){

          this.visibilityStatus = "hide";

        } else {

          this.visibilityStatus = "show";  
        }
      },
      error: (error) => {

        console.log(":: Error :: ");
        console.log(error);
        console.log();
      },
      complete: () => {

        console.log(":: Process Completed :: ");
        console.log();
      },
    });

  }

  
  removeCarFromParking(Id : number) {

    this.requests.deleteParkedParkingRecord(Id).subscribe({

      next: (next) => {

        console.log(":: NEXT CAR RECORD DELTED ::");

        console.log(next);

        this.getAllCarsRecords();

      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log(":: Car RECORD DELETED :: ");
      },
    });
  }

}
