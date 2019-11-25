import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})

export class AddcourseComponent implements OnInit {
  course_name;
  start_date;
  trainer_name;
  message='';

  constructor(private http: HttpClient,private _route:Router) { }

  ngOnInit() {
  }

  submit_form_data(){
    console.log("course_name : " + this.course_name);
    console.log("start_date : " + this.start_date);
    console.log("trainer_name : " + this.trainer_name);

    var body = "course_name=" + this.course_name 
        + "&start_date=" + this.start_date 
        + "&trainer_name=" + this.trainer_name;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/course/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, Course Successfully added!";
        this._route.navigate(['/courses'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Already Registered?";
      }
    )
  }

}
