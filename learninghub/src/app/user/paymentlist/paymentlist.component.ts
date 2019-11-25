import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
 
export class PaymentlistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }
  

 ngOnInit() {
    this.get_trainings_list();
    
  }


  uId:string;
  error_message='';
  trainings = [];
  get_trainings_list = function() {



    this.http.get("https://localhost:44387/studentservice/getuserid/"+localStorage.getItem('usermail')).subscribe(
      (result) => {
       
        console.log(result);
        this.uId = result['id'];
        console.log(this.uId)
        this.get_list();
        
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
}

  get_list = function() {
    this.http.get("https://localhost:44387/studentservice/traininglist/"+this.uId).subscribe(
      (result : any[]) => {
        this.trainings = result;
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

