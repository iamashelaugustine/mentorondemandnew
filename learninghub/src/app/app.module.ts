import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './shared/index/index.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { TrainersigninComponent } from './trainer/trainersignin/trainersignin.component';
import { TrainersignupComponent } from './trainer/trainersignup/trainersignup.component';
import { TrainerpageComponent } from './trainer/trainerpage/trainerpage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './shared/courses/courses.component';
import { adminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { AdminuserlistComponent } from './admin/adminuserlist/adminuserlist.component';
import { AdmintrainerlistComponent } from './admin/admintrainerlist/admintrainerlist.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { AdminupdateComponent } from './admin/adminupdate/adminupdate.component';
import { TrainercompletedComponent } from './trainer/trainercompleted/trainercompleted.component';
import { UsercompletedComponent } from './user/usercompleted/usercompleted.component';
import { UsercurrentComponent } from './user/usercurrent/usercurrent.component';
import { TrainercurrentComponent } from './trainer/trainercurrent/trainercurrent.component';
import { TrainereditComponent } from './trainer/traineredit/traineredit.component';
import { AddtechnologyComponent } from './admin/addtechnology/addtechnology.component';
import { TrainertechlistComponent } from './trainer/trainertechlist/trainertechlist.component';
import { TrainercourselistComponent } from './trainer/trainercourselist/trainercourselist.component';
import { TraineraddcourseComponent } from './trainer/traineraddcourse/traineraddcourse.component';
import { TrainereditprofileComponent } from './trainer/trainereditprofile/trainereditprofile.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { UsercoursesComponent } from './user/usercourses/usercourses.component';
import { TrainerinfoComponent } from './shared/trainerinfo/trainerinfo.component';
import { PaymentlistComponent } from './user/paymentlist/paymentlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IndexComponent,
    AboutusComponent,
    UsersigninComponent,
    UsersignupComponent,
    UserpageComponent,
    TrainersigninComponent,
    TrainersignupComponent,
    TrainerpageComponent,
    CoursesComponent,
    adminloginComponent,
    AdminpageComponent,
    AddcourseComponent,
    AddtechnologyComponent,
  AdminuserlistComponent,
AdmintrainerlistComponent ,
AdmineditComponent,
AdminupdateComponent,
TrainercompletedComponent,
UsercompletedComponent,
UsercurrentComponent,
TrainercurrentComponent,
TrainereditComponent,
TrainertechlistComponent,
TrainercourselistComponent,
TrainereditprofileComponent,
TraineraddcourseComponent,
UsercoursesComponent,
UserpaymentComponent,
TrainerinfoComponent,
PaymentlistComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
