import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../requests.service';
import { ParkingRequestI } from 'src/assets/parkingRequestData/ParkingRequestI';
import { ResponseDataI } from 'src/assets/carsData/ResponseDataI';
import { ErrorResponseDataI } from 'src/assets/carsData/ErrorReponseDataI';

@Component({
  selector: 'app-car-park',
  templateUrl: './car-park.component.html',
  styleUrls: ['./car-park.component.css']
})
export class CarParkComponent implements OnInit {

  carRequestResult : "good" | "bad" | "none" = "none";

  carResponse : ResponseDataI = {

    responseCode: "",
    responseDescription: "",
    message: "",
    data: null,

  };

  errorResponse : ErrorResponseDataI = {
   
    headers: {
      normalizedNames: {},
      lazyUpdate: null
    },
    
    status: 404,
    statusText: "Not Found",
    url: "http://172.24.80.242:4009/api/...",
    ok: false,
    name: "HttpErrorResponse",
    message: "Http failure response for /URL/ : NOT FOUND",
    
    error: {
      responseCode: "000",
      responseDescription: "fail",
      message: "EMPTY MESSAGE",
      data: null
    }
  }



  vehicleLicensePattern : any = /^([A-Z]{3}-[0-9]{3})$/;

  carParkForm = new FormGroup({

    employeeId : new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[\\d]+$")])),
    vehicleType : new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[A-Za-z]*$")])),
    vehicleIdentity : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.vehicleLicensePattern), Validators.minLength(7), Validators.maxLength(7)])),
  });

  

  carParkingInfo : ParkingRequestI = {
     
    employeeId: 0,
    vehicleType: '',
    vehicleIdentity: ''
  };


  constructor(private reqService : RequestsService) {}

  ngOnInit(): void {}


  sendParkingData(){

    this.carParkingInfo = this.carParkForm.value;

    const body = this.carParkingInfo;

    this.reqService.postMakeParkingRequest(body).subscribe({

      next: (next : any) => {

        this.carResponse = next;

        console.log(next);

        this.carRequestResult = "good";
      },
      error: (error) => {

        console.log(error);

        this.carRequestResult = "bad";

        this.errorResponse = error;

        console.log(this.carResponse);
      },
      complete: () => {

        console.log("Parking Data Posted!");
      },
    });

  }


  close(){

    this.carRequestResult = "none";
  }


}
