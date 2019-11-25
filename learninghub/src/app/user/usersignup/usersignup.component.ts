import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})

export class UsersignupComponent implements OnInit {
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
    signupform.role=3;
    console.log(signupform);
    signupform= JSON.stringify(signupform);
    console.log(signupform);

    // var body = "user_name=" + this.user_name 
    //     + "&email_id=" + this.email_id 
    //     + "&pass_word=" + this.pass_word
    //     + "&role=" + 
    //     + "&status=" +"active";
	
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("https://localhost:44387/authservice/register", signupform, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You have successfully registered"
        this.router.navigate(['usersignin'])
        
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}
