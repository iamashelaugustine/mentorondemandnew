import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
 
export class AdmineditComponent implements OnInit {
 technologies =[]
  constructor(private http: HttpClient) { }
  get_technology_list = function() {
    this.http.get("https://localhost:44387/adminservice/technologylist").subscribe(
      (result : any[]) => {
        this.technologies = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_technology = function(_id) {
    this.http.delete("https://localhost:44387/adminservice/technology/"+_id).subscribe(
      (result) => {
        //this.course = result;
        this.error_message = "Deleted"
        this.users = [];
        this.get_technology_list()
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
  ngOnInit() {
    this.get_technology_list()
  }

}

