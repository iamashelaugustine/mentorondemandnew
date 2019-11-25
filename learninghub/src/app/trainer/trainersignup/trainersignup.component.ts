import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainersignup',
  templateUrl: './trainersignup.component.html',
  styleUrls: ['./trainersignup.component.css']
})

export class TrainersignupComponent implements OnInit {
  user_name;
  email_id;
  pass_word;
  status;
  role;
  message='';
  

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit() {
  }
  
  submit_form_data(signupform){

    signupform.status="active";
    signupform.role=2;
    signupform= JSON.stringify(signupform);

    console.log("user_name : " + this.user_name);
    console.log("email_id : " + this.email_id);
    console.log("pass_word : " + this.pass_word);


    // var body = "trainer_name=" + this.trainer_name 
    //     + "&email_id=" + this.email_id        
    //     + "&pass_word=" + this.pass_word
        //+ "&status=" + "active";
	
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("https://localhost:44387/authservice/register", signupform, 
    {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully registered"
        this.router.navigate(['trainersignin'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}