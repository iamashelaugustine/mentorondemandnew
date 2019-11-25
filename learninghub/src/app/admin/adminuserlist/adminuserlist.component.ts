import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  uerror_message='';
  users = [];
  get_user_list = function() {
    this.http.get("https://localhost:44387/adminservice/studentlist").subscribe(
      (result : any[]) => {
        this.users = result;
        this.uerror_message = ""
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_user = function(id) {
    this.http.delete("https://localhost:44387/adminservice/"+id).subscribe(
      (result) => {
        this.uerror_message = "Deleted"
        this.users = [];
        this.get_user_list()
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  block_user = function(id) {
    console.log(id)
    this.http.put("https://localhost:44387/adminservice/block/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.uerror_message = ""
        alert("User Blocked");
        
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unblock_user = function(id) {
    console.log(id)
    this.http.put("https://localhost:44387/adminservice/unblock/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.uerror_message = ""
        alert("User Unblocked");
        
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }












  ngOnInit() {
    this.get_user_list();
  } 

}

