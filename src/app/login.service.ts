import { Injectable } from '@angular/core';
import { LoginResponseI } from 'src/assets/loginInfo/LoginResponseI';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private newUsername : string;

  private newPassword : string;

  private isLoggedIn : boolean = false;

  private loginResponse !: LoginResponseI;

  private adminStatus !: boolean;

  private userEmpID !: number;

  private userEmpRank !: number;

  private userEmpName !: string;



  constructor(private tokenService : TokenService) { 

    this.newUsername = "";

    this.newPassword = "";
  }



  public set Username(username : string){

    this.newUsername = username;
  }


  public get Username(){

    return this.newUsername;
  }



  public set Password(password : string){

    this.newPassword = password;
  }


  public get Password(){

    return this.newPassword;
  }


  setResponse(res : any){

    this.loginResponse = res;
    
    this.loginResponseData();

    this.tokenService.setToken(this.loginResponse.token);
  }


  setLoginResult(result : boolean){

    this.isLoggedIn = result;
  }


  getResponse(){
    
    return this.loginResponse;
  }


  getLoginResult(){

    return this.isLoggedIn;
  }


  storeUsername(){

    sessionStorage.setItem("username", this.Username);
  }


  retriveUsername(){

    return sessionStorage.getItem("username");
  }


  loginResponseData(){

    this.loginResponse.data.map(

      (data) => {

        this.userEmpID = data.employeeId;
        this.userEmpName = data.employeeName;
        this.userEmpRank = data.rank;
        this.adminStatus = data.isAdmin;
  
      }

    );
  }


  getUserAdminStatus() {

    return this.adminStatus;
  }

  getUserEmpID() {

    return this.userEmpID;
  }

  getUserEmpName() {

    return this.userEmpName;
  }

  getUserEmpRank() {

    return this.userEmpRank;
  }


}
