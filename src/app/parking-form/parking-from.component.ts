import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RequestsService } from '../requests.service';
import { ParkingitemsComponent } from '../parkingitems/parkingitems.component';
import { RegisterService } from '../register.service';
import { RanksI } from 'src/assets/rankingData/RanksI';
import { RanksData } from 'src/assets/rankingData/RanksData';



@Component({
  selector: 'app-parking-from',
  templateUrl: './parking-from.component.html',
  styleUrls: ['./parking-from.component.css']
})
export class ParkingFromComponent implements OnInit {

  textAllowedRanks : any = "Select an allowed rank."

  parkingResponse : boolean | string = "none";

  ddClick : boolean = false;

  ddState : any = {display: "none"};

  // @ViewChild("parkingItems") parkingItems !: ParkingitemsComponent;


  parkingForm = new FormGroup({

    parkingName: new FormControl(""),
    parkingSpace: new FormControl(""),
    parkingLocation: new FormControl(""),
    rankAllowed: new FormControl(""),

  });


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



  constructor(private requests : RequestsService, private registerService : RegisterService){}


  ngOnInit(): void {

    this.requests.getRanksgData().subscribe({

      next: (next) => {

        console.log(":: Rank Data :: ")

        console.log(next);
        
        this.ranksData  = next;
      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log("Rank Processing Completed!")
      },

    })

  }


  sendParkingData(){

    let body = this.parkingForm.value;
    
    this.requests.postParkingData(body).subscribe({

      next: (next) => {

        // this.parkingItems.getParking();

        console.log("NEXT RESULT :: POST PARKING DATA REQUEST");

        console.log(next);

        this.parkingResponse = true;

        console.log(this.parkingResponse);
      },
      error: (error) => {

        console.log("ERROR RESULT :: POST PARKING DATA REQUEST");
       
        console.log(error);

        this.parkingResponse = false;

        console.log(this.parkingResponse);
      },
      complete: () => {

        console.log("POST Parking Data Completed");
      },
    });

  }


  setRankInput(rank : RanksData){

    const rankNum = rank.rankValue;
    const rankName = rank.rank;

    this.parkingForm.get("rankAllowed")?.setValue(rankNum);
    
    this.textAllowedRanks = rankName;
  }


  toggle(){

    console.log("Call Toggle Method");

    this.ddClick = !this.ddClick;

    if(this.ddClick === true){

      console.log("Toggle DD :: IF");

      this.ddState = {display: "flex"};
    
    } else {

      console.log("Toggle DD :: ELSE");

      this.ddState = {display: "none"};
    }

  }


  close(){

    this.parkingResponse = "none";
  }

}
