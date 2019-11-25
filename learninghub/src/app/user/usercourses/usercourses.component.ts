import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserpaymentComponent } from '../userpayment/userpayment.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './usercourses.component.html',
  styleUrls: ['./usercourses.component.css']
})
export class UsercoursesComponent implements OnInit {
  message: string;
  TechnologyName: string;
  TechnologyId: number;
  UserId: string;
  CourseFee: number;
  StartDate: Date;
  EndDate: Date;

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }
  error_message='';
  courses = [];
  get_course_list = function() {
    this.http.get("https://localhost:44387/mentorservice/courses").subscribe(
      (result : any) => {
        this.courses = result;
        //result = JSON.parse(result);
        //console.log(result)
        console.log(result);
        this.error_message = ""        
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }  

userpayment = function(id: Number, technologyName: string, courseFee: Number, startDate: Date, endDate: Date) {

  this.http.get("https://localhost:44387/studentservice/getuserid/"+localStorage.getItem('usermail')).subscribe(
    (result) => {
      this.UserId = result['id'];
      this.TechnologyId = id;
      this.TechnologyName = technologyName;
      this.CourseFee = courseFee;
      this.StartDate = startDate;
      this.EndDate = endDate;
      console.log(id);
      console.log(courseFee);
      console.log(this.UserId);
      this.useraddtraining();
    },
    (error) => {
      //this.error_message = "Error occured, check whether Backend is running!";
      console.log(error)
    }
  )
}

useraddtraining(){
 
var body= JSON.stringify({
  TechnologyId: this.TechnologyId,
  TechnologyName: this.TechnologyName,
  UserId: this.UserId,
  CourseFee: this.CourseFee,
  StartDate: this.StartDate,
  EndDate: this.EndDate
})

  let headers = new HttpHeaders({'Content-Type': 'application/json'});

  this.http.post("https://localhost:44387/studentservice/addtraining", body, 
                {headers: headers, responseType:'text'}).subscribe(
    (result) => {
      console.log(result)
      this.message = "Congratulations, training Successfully added!";
      this.router.navigate(['/userpayment'])
    },
    (error) => {
      console.log(error)
      this.message = "Error : Already Registered?";
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

  ngOnInit() {
    this.get_course_list();
  }

}




// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-adminedit',
//   templateUrl: './adminedit.component.html',
//   styleUrls: ['./adminedit.component.css']
// })
 
// export class AdmineditComponent implements OnInit {
//  technologies =[]
//   constructor(private http: HttpClient) { }
//   get_technology_list = function() {
//     this.http.get("https://localhost:44343/api/Admin/technologylist").subscribe(
//       (result : any[]) => {
//         this.technologies = result;
//         this.error_message = ""
//       },
//       (error) => {
//         this.error_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )
//   }

//   delete_technology = function(_id) {
//     this.http.delete("https://localhost:44343/api/Admin/technology/"+_id).subscribe(
//       (result) => {
//         //this.course = result;
//         this.error_message = "Deleted"
//         this.users = [];
//         this.get_technology_list()
//       },
//       (error) => {
//         this.error_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )
//   }
//   ngOnInit() {
//     this.get_technology_list()
//   }

// }

