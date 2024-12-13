import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { XpassComponent } from './xpass/xpass.component';
import { ParkingComponent } from './parking/parking.component';
import { CarParkComponent } from './car-park/car-park.component';
import { ParkingFromComponent } from './parking-from/parking-from.component';
import { DefaultContentComponent } from './default-content/default-content.component';
import { ParkingTableComponent } from './parking-table/parking-table.component';
import { CarBoxComponent } from './car-box/car-box.component';
import { UsersComponent } from './users/users.component';
import { ReportComponent } from './report/report.component';



const routes: Routes = [

  {path: "signup", component: RegisterComponent},
  {path: "setup", component: XpassComponent},
  {path: "login", component: LoginComponent},
  {path: "error", component: ErrorComponent},
  {path: "park", component: ParkingComponent, canActivate: [AuthGuardServiceService],
  children: [
    {path: "welcome", component: DefaultContentComponent},
    {path: "add-parking", component: ParkingFromComponent},
    {path: "show-parkings", component: ParkingTableComponent},
    {path: "add-car-parking", component: CarParkComponent},
    {path: "show-cars-parked", component: CarBoxComponent},
    {path: "show-users", component: UsersComponent},
    {path: "", redirectTo: "welcome", pathMatch: "full"},
  ]},
  {path: "report", component: ReportComponent},
  {path: "park/:id", component: CarParkComponent},
  {path: "user", component: UserComponent, canActivate: [AuthGuardServiceService]},
  {path: "user/:id", component: TestComponent, canActivate: [AuthGuardServiceService]},
  {path: "", redirectTo: "/signup", pathMatch: "full"},
  {path: "**", redirectTo: "/error", pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
