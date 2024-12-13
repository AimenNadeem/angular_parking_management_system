import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() {}

  
  setToken(value : any){
    
    const token = value;

    sessionStorage.setItem("token", token);
  }



  getToken(){

    return sessionStorage.getItem("token");
  }


  deleteToken(){

    sessionStorage.removeItem("token");
  }

}
