import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainereditprofile',
  templateUrl: './trainereditprofile.component.html',
  styleUrls: ['./trainereditprofile.component.css']
})

export class TrainereditprofileComponent implements OnInit {
  MentorId ;
Name;
LinkedinId;
TimeSlot;
Experience;

  message='';  

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.get_mentorid()
  }
  
      
    get_mentorid = function() {

    this.http.get("https://localhost:44387/mentorservice/getmentor/"+localStorage.getItem('mentormail')).subscribe(
      (result) => {
       
        console.log(result);
        this.MentorId = result['id'];
        this.Name = result['name'];
        console.log(this.MentorId)        
        console.log(this.Name)        
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
}


submit_form_data(formdata){   
  console.log("TrainerID : " + this.MentorId);            
  console.log("Trainername : " + this.Name);
  console.log("LinkedInID : " + this.LinkedinId);
  console.log("TimeSlot : " + this.TimeSlot);
  console.log("Experience : " + this.Experience);

  console.log(formdata);
  
  
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("https://localhost:44387/mentorservice/mentorupdateprofile",formdata, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, profile succesfully updated !"
        alert(this.message)          
        this.router.navigate(['/trainerpage'])
      },
      (error) => {          
        console.log(error)
        this.message = "Error : Backend is running? or any other error";
        alert(this.message)
      }
    )
  }

}








  // submit_form_data(signupform){

  //   signupform= JSON.stringify(signupform);

  //   console.log("Trainername : " + this.trainer_name);
  //   console.log("LinkedInID : " + this.linkedin_id);
  //   console.log("TimeSlot : " + this.time_slot);
  //   console.log("Experience : " + this.experience);

  //   // var body = "trainer_name=" + this.trainer_name 
  //   //     + "&email_id=" + this.email_id        
  //   //     + "&pass_word=" + this.pass_word
  //       //+ "&status=" + "active";
	
  //   let headers = new HttpHeaders({'Content-Type': 'application/json'});

  //   this.http.post("https://localhost:44335/api/account/register", signupform, 
  //   {headers: headers, responseType:'text'}).subscribe(
  //     (result) => {
  //       console.log(result)
  //       this.message = "Congratulations, You had successfully registered"
  //       this.router.navigate(['trainersignin'])
  //     },
  //     (error) => {
  //       console.log(error)
  //       this.message = "Error : Backend is running? or Registered already?";
  //     }
  //   )
  // }