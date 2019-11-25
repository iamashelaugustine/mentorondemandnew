import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
         private router: Router) { }

         ngOnInit() {
          this.get_course_list();
        }

  error_message='';
  courses = [];
  get_course_list = function() {
    this.http.get("https://localhost:44387/mentorservice/courses").subscribe(
      (result : any[]) => {
        this.courses = result;                     
        console.log(result);                                        
        this.get_mentor()
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

      getmentorprofile= function(id: Number) {
        this.http.get("https://localhost:44387/studentservice/getmentorprofile/"+id).subscribe(
          (result) => {
            this.mentor = result;
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






// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-trainercourselist',
//   templateUrl: './trainercourselist.component.html',
//   styleUrls: ['./trainercourselist.component.css']
// })
 
// export class TrainercourselistComponent implements OnInit {

//   constructor(private route: ActivatedRoute, private http: HttpClient,
//     private router: Router) { }
  

//  ngOnInit() {
//     this.get_course_list();
    
//   }


//   mentorId:string;
//   error_message='';
//   courses = [];
//   get_course_list = function() {



//     this.http.get("https://localhost:44343/api/Admin/getmentor/"+localStorage.getItem('mentormail')).subscribe(
//       (result) => {
       
//         console.log(result);
//         this.mentorId = result['id'];
//         console.log(this.mentorId)
//         this.get_list();
        
//       },
//       (error) => {
//         //this.error_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )


//   }

//   get_list = function() {
//     this.http.get("https://localhost:44343/api/Admin/courselist/"+this.mentorId).subscribe(
//       (result : any[]) => {
//         this.courses = result;
//         console.log(result)
//         this.error_message = ""
//       },
//       (error) => {
//         this.error_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )
    
//   }

// } 

