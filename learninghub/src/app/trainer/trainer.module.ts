import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersigninComponent } from './trainersignin/trainersignin.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainereditComponent } from './traineredit/traineredit.component';
import { TrainertechlistComponent } from './trainertechlist/trainertechlist.component';
import { TraineraddcourseComponent } from './traineraddcourse/traineraddcourse.component';
import { TrainercourselistComponent } from './trainercourselist/trainercourselist.component';
import { TrainereditprofileComponent } from './trainereditprofile/trainereditprofile.component';



@NgModule({
  declarations: [TrainersigninComponent, TrainersignupComponent, TrainerpageComponent, TrainercompletedComponent, TrainercurrentComponent, TrainereditComponent, TrainertechlistComponent, TraineraddcourseComponent, TrainercourselistComponent, TrainereditprofileComponent],
  imports: [
    CommonModule
  ]
})
export class TrainerModule { }
