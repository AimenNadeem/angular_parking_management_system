import { Component, OnInit } from '@angular/core';
import { UserResponseDataI } from 'src/assets/usersData/UsersResponseDataI';
import { RequestsService } from '../requests.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ParkingReportService } from '../parking-report.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  reportIcon : any = "/assets/SVGs/report-document-file-svgrepo-com.svg";

  reportGifIcon : any = "/assets/pictures/GIFs/newspaper.gif";

  reportGenerated : boolean = false;

  usersFrom = new FormGroup({

    fromDate: new FormControl(""),
    toDate: new FormControl(""),
    rank: new FormControl(""),
    vehicleType: new FormControl(""),
  });


  usersData : UserResponseDataI = {

    responseCode: "",
    responseDescription: "",
    message: "",
    data: []
  };

  constructor(private requests : RequestsService, private reportService : ParkingReportService, private router : Router) {}

  ngOnInit(): void {

    this.getUsersData();
  }


  getUsersData() {

    this.requests.getAllUsers().subscribe({

      next: (next) => {

        this.usersData = next;

        this.usersData.data.map(

          (user) => {

            switch(user.rank) {

              case 1 : user.rankVal = "OG";
              break;
        
              case 2 : user.rankVal = "AVP";
              break;
        
              case 3 : user.rankVal = "VP";
              break;
        
              case 4 : user.rankVal = "SVP";
              break;
        
              case 5 : user.rankVal = "EVP";
              break;
        
              case 6 : user.rankVal = "SEVP";
              break;
                    
            }
          }

        );

      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log(":: User Data Fetched ::")
      },

    });
  }


  removeUser(Id : any){

    this.requests.deleteUser(Id).subscribe({

      next: (next) => {

        console.log(next);

        this.getUsersData();
      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log(":: User Delete Process Completed ::");
      },

    });
  }


  submitUserForm(){

    let userReport = {

      fromDate: this.usersFrom.get('fromDate')?.value,
      toDate: this.usersFrom.get('toDate')?.value,
      rank: 0,
      vehicleType: this.usersFrom.get('vehicleType')?.value,
  
    }


    let rankVal = this.usersFrom.get('rank')?.value;

    switch(rankVal){

      case "OG": userReport.rank = 1;
      break;

      case "AVP": userReport.rank = 2;
      break;

      case "VP": userReport.rank = 3;
      break;

      case "SVP": userReport.rank = 4;
      break;

      case "EVP": userReport.rank = 5;
      break;

      case "SEVP": userReport.rank = 6;
      break;
    }

    this.requests.generateReport(userReport).subscribe({

      next: (next : any) => {

        console.log(":: Parking Report Generated :: ");
        
        console.log(next);

        this.reportService.setReport(next);

        this.reportGenerated = true;

      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log(":: Report Process Completed ::");
      },

    });

  }

  goToReport(){

    this.router.navigate(["report"]);
  }

}
