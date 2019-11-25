import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainerinfo',
  templateUrl: './trainerinfo.component.html',
  styleUrls: ['./trainerinfo.component.css']
})
export class TrainerinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
         private router: Router) { }

         ngOnInit() {
          this.get_mentorinfo_list();
        }

  error_message='';
  mentors = [];
  get_mentorinfo_list = function() {
    this.http.get("https://localhost:44387/studentservice/getmentorprofile").subscribe(
      (result : any[]) => {
        this.mentors = result;                     
        console.log(result);                                                
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
 

}


