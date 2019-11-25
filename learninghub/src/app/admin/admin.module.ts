import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { AdmintrainerlistComponent } from './admintrainerlist/admintrainerlist.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';



@NgModule({
  declarations: [adminloginComponent, AdminpageComponent, AddcourseComponent, AdminuserlistComponent, AdmintrainerlistComponent, AdmineditComponent, AdminupdateComponent, AddtechnologyComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
