import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParkingI } from 'src/assets/parkingData/ParkingI';
import { RequestsService } from '../requests.service';
import { RanksI } from 'src/assets/rankingData/RanksI';
import { RegisterService } from '../register.service';



@Component({
  selector: 'app-parkingitems',
  templateUrl: './parkingitems.component.html',
  styleUrls: ['./parkingitems.component.css']
})
export class ParkingitemsComponent implements OnInit {


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


}
