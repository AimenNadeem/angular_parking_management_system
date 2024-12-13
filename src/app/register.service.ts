import { Injectable } from '@angular/core';
import { RegDataI } from 'src/assets/registerInfo/regI';
import { ResponseRI } from 'src/assets/registerInfo/responseRI';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  reg : RegDataI = {

    employeeId: 0,
    employeeName: "",
    userName: "",
    mobileNo: 0,
    email: "",
    accountNo: 0,

  };

  private response : ResponseRI = {responseCode: "", responseDescription: "", message: ""};

  constructor() {}


  setRegData(obj : RegDataI){

    localStorage.setItem("empId", obj.employeeId.toString());
    localStorage.setItem("empName", obj.employeeName);
    localStorage.setItem("username", obj.userName);
    localStorage.setItem("mobile", obj.mobileNo.toString());
    localStorage.setItem("email", obj.email);
    localStorage.setItem("account", obj.accountNo.toString());
  }


  setRegPassword(password : string){
    
    localStorage.setItem("pass", password);
  }



  getID(){

    return localStorage.getItem("empId");
  }


  getName(){

    localStorage.getItem("empName");
  }


  getUsername(){

    return localStorage.getItem("username");
  }


  getMobileNo(){

    return localStorage.getItem("mobile");
  }


  getEmail(){

    return localStorage.getItem("email");

  }


  getAccountNo(){

    return localStorage.getItem("account");
  }

  getPassword(){

    return localStorage.getItem("pass");
  }



  setImage(img : string){

    localStorage.setItem("imgX", img);
  
  }


  getImage(){

    return localStorage.getItem("imgX");
  }


  clearAllStorage(){

    localStorage.clear();
  }


  setResponse(responseVal : any){

    this.response = responseVal;
  }

  getResponse(){

    return this.response;
  }

  

  setRanks(ranks : any){

    sessionStorage.setItem("ranks", ranks);
  }


  getRanks(){

    return sessionStorage.getItem("ranks");
  }

}
