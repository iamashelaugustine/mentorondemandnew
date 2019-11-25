import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainertechlist',
  templateUrl: './trainertechlist.component.html',
  styleUrls: ['./trainertechlist.component.css']
})
 
export class TrainertechlistComponent implements OnInit {
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

  ngOnInit() {
    this.get_technology_list()
  }

}

