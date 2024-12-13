import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { StyleService } from './style.service';
import { DefaultComponent } from './default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { UsersBoxComponent } from './users-box/users-box.component';
import { AlertsComponent } from './alerts/alerts.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SideComponent } from './side/side.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { XpassComponent } from './xpass/xpass.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingitemsComponent } from './parkingitems/parkingitems.component';
import { CarParkComponent } from './car-park/car-park.component';
import { CarBoxComponent } from './car-box/car-box.component';
import { ParkingFromComponent } from './parking-from/parking-from.component';
import { ParkingContainerComponent } from './parking-container/parking-container.component';
import { ParkingTableComponent } from './parking-table/parking-table.component';
import { DefaultContentComponent } from './default-content/default-content.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTabsModule} from '@angular/material/tabs';
import { UsersComponent } from './users/users.component';
import { ReportComponent } from './report/report.component'; 



@NgModule({
  declarations: [ AppComponent, LoginComponent, ErrorComponent, NavbarComponent, UserComponent, DefaultComponent, UsersBoxComponent, AlertsComponent, SearchComponent, SideComponent, TestComponent, RegisterComponent, XpassComponent, ParkingComponent, ParkingitemsComponent, CarParkComponent, CarBoxComponent, ParkingFromComponent, ParkingContainerComponent, ParkingTableComponent, DefaultContentComponent, UsersComponent, ReportComponent ],
  imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, MatIconModule, FormsModule, HttpClientModule, 
    MatButtonModule, MatTabsModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule implements OnInit {


  constructor(private styler : StyleService){}

  ngOnInit(): void {
   
    this.styler.changeBG();
    this.styler.changeTitle();
  }

 }
