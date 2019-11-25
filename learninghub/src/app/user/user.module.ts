import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { UsercurrentComponent } from './usercurrent/usercurrent.component';
import { UserpaymentComponent } from './userpayment/userpayment.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';




@NgModule({
  declarations: [UsersigninComponent, UsersignupComponent, UserpageComponent, UsercompletedComponent, UsercurrentComponent, UserpaymentComponent, UsercoursesComponent, PaymentlistComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
