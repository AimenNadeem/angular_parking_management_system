import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private router_url : string;
  
  private document_url : string;
  
  id : string;
  
  style : any;

  private hrefValue : string;


  
  navigationStyle : Subject<any> = new Subject<any>();



  constructor(private router : Router) {

    this.router_url = "";

    this.document_url = "";

    this.id = "";

    this.hrefValue = "";
  }


  changeBG(){

    this.router_url = this.router.url;

    this.document_url = document.URL;

    if(this.router_url.endsWith("/login") || this.document_url.endsWith("/login")){

      document.body.style.backgroundColor = "black";  
      document.body.style.color = "white";
      document.body.style.backgroundImage = "";

    } 
    else if(this.router_url.endsWith("/signup") || this.document_url.endsWith("/signup") || this.router_url.endsWith("/setup") || this.document_url.endsWith("/setup")){

      document.body.style.backgroundColor = "white";  
      document.body.style.backgroundImage = "url('assets/pictures/bank alfalah4.png')";
      document.body.style.backgroundSize = "100.5rem";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    else {

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.backgroundImage = "";

    }

  }


  changeTitle(){

    this.router_url = this.router.url;

    this.document_url = document.URL;

    if(this.document_url.endsWith("/login")){

      document.title = "Login";
    
    } else if(this.document_url.endsWith("/user")) {

      document.title = "Welcome";
    
    } else {

      document.title = "App";
    }

  }


  
  //{"box-shadow": "0px 4px 8px 0px black"};
  //{"box-shadow": "0px 1px 5px 4px gray"};


}
