import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { RegisterService } from '../register.service';
import { RanksI } from 'src/assets/rankingData/RanksI';
import { ParkingI } from 'src/assets/parkingData/ParkingI';


@Component({
  selector: 'app-parking-table',
  templateUrl: './parking-table.component.html',
  styleUrls: ['./parking-table.component.css']
})
export class ParkingTableComponent implements OnInit {

  ranksData : RanksI = {

    responseCode: '',
    responseDescription: '',
    message: '',
    data: [
      {
        id: 0,
        rank: "Loading Data...",
        rankValue: "",
      }
    ],
  };



  parkingInfo : ParkingI = {

    responseCode: "",
    responseDescription: "",
    message: null,
    data: [],
  };


  constructor(private requests : RequestsService, private registerService : RegisterService) {}
  

  ngOnInit(): void {

    this.getParking();

    let jsonRanks = this.registerService.getRanks();

    let rankX = JSON.parse(String(jsonRanks));

    this.ranksData = rankX;
  }


  getParking(){
    
    this.requests.getParkingData().subscribe({

      next: (next) => {

        this.parkingInfo = next;
      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log("Parking Process Completed");
      },
    });
  }
  

  deleteParking(parkingID : number){

    this.requests.deleteParkingData(parkingID).subscribe({

      next: (next) => {

        console.log("Next Value For Park Delete Click");
        
        console.log(next);

        this.getParking();

      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log("Park Deleted");
      },
    });

  }


}
