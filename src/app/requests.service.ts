import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRI } from 'src/assets/registerInfo/responseRI';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {


  readonly BaseURL : string = "http://172.24.80.242:4009/api/";

  jwt : any; 

  headerValue : any = {'Authorization': `Bearer \'No-Token\'`};



  constructor(private http : HttpClient, private tokenService : TokenService) {}


  postRegister(body : any){

    return this.http.post(this.BaseURL + "Register/registration", body);
  }

  
  postLogin(body : any){

    console.log(":: Inside HTTP Post Login Method ::");

    return this.http.post<ResponseRI>(this.BaseURL + "Login", body);
  }


  postSetPassword(body : any){
    
    return this.http.post(this.BaseURL + "SetPassword", body);
  }


  getRanksgData(): Observable<any>{

    return this.http.get(this.BaseURL + "Register/GetRanks");
  }
  
 
  getParkingData() : Observable<any>{

    this.jwt = this.tokenService.getToken();
    
    this.headerValue = { 'Authorization': `Bearer ${this.jwt}` };

    return this.http.get(this.BaseURL + "Parking/GetAllParkings", {headers: this.headerValue});
  }


  postParkingData(body : any){

    return this.http.post(this.BaseURL + "Parking/AddParking", body);
  }


  postMakeParkingRequest(body : any){

    return this.http.post(this.BaseURL + "Parking/MakeRequest", body);

  }

  
  getParkers() : Observable<any> {

    
    this.jwt = this.tokenService.getToken();

    this.headerValue = { 'Authorization': `Bearer ${this.jwt}` };

    return this.http.get(this.BaseURL + "Parking/GetAllParkingRecord", {headers: this.headerValue});
  }

  
  deleteParkingData(Id : number){

    const deleteParkingURL = `Parking/DeleteParking/${Id}`;

    return this.http.delete(this.BaseURL + deleteParkingURL);
  }


  deleteParkedParkingRecord(Id : number){

    const deleteParkingRecordURL = `Parking/DeleteParkingRecord/${Id}`;

    return this.http.delete(this.BaseURL + deleteParkingRecordURL);
  }


  getAllUsers() : Observable<any>{

    this.jwt = this.tokenService.getToken();

    this.headerValue = { 'Authorization': `Bearer ${this.jwt}` };

    return this.http.get(this.BaseURL + "Register/GetAllUsers", {headers: this.headerValue});
  }

  
  deleteUser(Id : number) {

    let emp_Id = Id;

    let queryURL = `?id=${emp_Id}`;

    return this.http.delete(this.BaseURL + "Register/DeleteUser" + queryURL);
  }


  generateReport(body : any){

    return this.http.post(this.BaseURL + "Parking/ParkingRecordReports", body);
  }

}
