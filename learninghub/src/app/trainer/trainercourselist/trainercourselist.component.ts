import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainercourselist',
  templateUrl: './trainercourselist.component.html',
  styleUrls: ['./trainercourselist.component.css']
})
 
export class TrainercourselistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }
  

 ngOnInit() {
    this.get_course_list();
    
  }


  mentorId:string;
  error_message='';
  courses = [];
  get_course_list = function() {



    this.http.get("https://localhost:44387/mentorservice/getmentor/"+localStorage.getItem('mentormail')).subscribe(
      (result) => {
       
        console.log(result);
        this.mentorId = result['id'];
        console.log(this.mentorId)
        this.get_list();
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
}

  get_list = function() {
    this.http.get("https://localhost:44387/mentorservice/courselist/"+this.mentorId).subscribe(
      (result : any[]) => {
        this.courses = result;
        console.log(result)
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
    
  }

} 

