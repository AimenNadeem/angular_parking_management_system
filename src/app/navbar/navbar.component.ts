import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StyleService } from '../style.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { LoginService } from '../login.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  style : any = {"box-shadow": "0px 1px 5px 4px gray"};

  routerURL : string = this.router.url;

  documentURL : string = document.URL;

  constructor(private styler : StyleService, private router : Router, private regService : RegisterService, private tokenService : TokenService) {}


  ngOnInit() : void {

    this.styler.changeBG();

    this.styler.navigationStyle.subscribe(

      (shadow) => {

        // console.log(shadow);

        if(shadow === "signup" || shadow === "setup"){

          this.style = {"box-shadow": "0px 1px 10px 0px black"};
        } 
        else if(shadow === "login"){

          this.style = {"box-shadow": "0px 1px 5px 4px gray"};
        }
      }
    );
  }


  logState(){

    this.routerURL = this.router.url;

    this.documentURL = document.URL;

    this.styler.changeBG();

    
    if(this.routerURL.endsWith("login") || this.documentURL.endsWith("login") || this.routerURL.endsWith("signup") || this.documentURL.endsWith("signup") || this.routerURL.endsWith("setup") || this.documentURL.endsWith("setup")){
      
      return true;
    
    } 
    else if(this.routerURL.endsWith("error")){

      return "error";
    }
    else {

      return false;
    }

  }


  clearLoginData(){

    this.regService.clearAllStorage();
    
  }


}
