import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})

export class AddtechnologyComponent implements OnInit {
  technology_name;
  commission;
  message='';
  constructor(private http: HttpClient,private _route:Router) { }

  ngOnInit() {
  }

  submit_form_data(formdata){
    console.log("TechnologyName : " + this.technology_name);
    console.log("Commission : " + this.commission);
    formdata= JSON.stringify(formdata);

    // var body = "technology_name=" + this.technology_name 
    //     + "&start_date=" + this.commission ;
	
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post("https://localhost:44387/adminservice/addtechnology", formdata, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, technology Successfully added!";
        this._route.navigate(['/adminedit'])
      },
      (error) => {
        console.log(error)
        this.message = "Error : Already Registered?";
      }
    )
  }

}
