import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HomeComponent } from './shared/home/home.component';
import { IndexComponent } from './shared/index/index.component';
import { TrainersigninComponent } from './trainer/trainersignin/trainersignin.component';
import { TrainersignupComponent } from './trainer/trainersignup/trainersignup.component';
import { TrainerpageComponent } from './trainer/trainerpage/trainerpage.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserpageComponent } from './user/userpage/userpage.component';
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




const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'home',component:HomeComponent},
  {path:'trainersignin',component:TrainersigninComponent},
  {path:'trainersignup',component:TrainersignupComponent},
  {path:'trainerpage',component:TrainerpageComponent},
  {path:'usersignin',component:UsersigninComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'courses',component:CoursesComponent},
  {path:'admin',component:adminloginComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'addcourse',component:AddcourseComponent},
  {path:'adminuserlist',component:AdminuserlistComponent},
  {path:'admintrainerlist',component:AdmintrainerlistComponent},
  {path:'adminedit',component:AdmineditComponent},
  {path:'adminupdate/:id',component:AdminupdateComponent,pathMatch:'full'},
  {path:'trainercompleted',component:TrainercompletedComponent},
  {path:'usercompleted',component:UsercompletedComponent},
  {path:'usercurrent',component:UsercurrentComponent},
{path:'trainercurrent',component:TrainercurrentComponent},
{path:'addtechnology',component:AddtechnologyComponent},
{path:'trainertechlist',component:TrainertechlistComponent},
{path:'trainercourselist',component:TrainercourselistComponent},
{path:'traineraddcourse/:id',component:TraineraddcourseComponent, pathMatch:'full'},
{path:'traineredit/:id',component:TrainereditComponent,pathMatch:'full'},
{path:'trainereditprofile',component:TrainereditprofileComponent},
{path:'userpayment',component:UserpaymentComponent},
{path:'usercourses',component:UsercoursesComponent},
{path:'trainerinfo',component:TrainerinfoComponent},
{path:'paymentlist',component:PaymentlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
