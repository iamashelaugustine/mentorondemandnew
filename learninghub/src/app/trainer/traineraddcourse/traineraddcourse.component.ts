import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-traineraddcourse',
  templateUrl: './traineraddcourse.component.html',
  styleUrls: ['./traineraddcourse.component.css']
})
export class TraineraddcourseComponent implements OnInit {

    
    technologyName:string
    commission:String    
    technologyId:number
    mentorId: string
    message:string
    startDate: Date
    endDate: Date
    courseFee: number
    constructor(private route: ActivatedRoute, private http: HttpClient,
      private router: Router) { 
    }

    ngOnInit() {
          this.route.params.subscribe(params => {
            this.technologyId =  parseInt(this.route.snapshot.paramMap.get('id'));            
            console.log(this.technologyId);            
          });
  
      this.http.get("https://localhost:44387/mentorservice/getmentor/"+localStorage.getItem('mentormail')).subscribe(
        (result) => {
          console.log(result);
          
          this.mentorId = result['id'];               
        },
        (error) => {
          //this.error_message = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )


      this.http.get("https://localhost:44387/adminservice/technology/"+this.technologyId).subscribe(
        (result) => {
         
          console.log(result);
          this.technologyName = result['technologyName'];
          this.commission = result['commission'];                    
        },
        (error) => {
          //this.error_message = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )

  
    }
  
    submit_form_data(formdata){               
      formdata.technologyId = this.technologyId;  
      console.log("technologyid : " + this.technologyId);
      console.log("mentorid : " + this.mentorId);      
      console.log("technologyName : " + this.technologyName);
      console.log("commission : " + this.commission);
      console.log("startdate : " + this.startDate);      
      console.log("enddate : " + this.endDate);
      console.log("coursefee : " + this.courseFee);

      console.log(formdata);
      
        
    
      let headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      this.http.post("https://localhost:44387/mentorservice/addcourse/",formdata, 
                    {headers: headers, responseType:'text'}).subscribe(
        (result) => {
          console.log(result)
          this.message = "Congratulations, course succesfully added !"
          alert(this.message)          
          this.router.navigate(['/trainerpage'])
        },
        (error) => {          
          console.log(error)
          this.message = "Error : Backend is running? or any other error";
          alert(this.message)
        }
      )




    //   let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // this.http.post("https://localhost:44343/api/Admin/addtechnology", formdata, 
    //               {headers: headers, responseType:'text'}).subscribe(
    //   (result) => {
    //     console.log(result)
    //     this.message = "Congratulations, course Successfully added!";
    //     this._route.navigate(['/adminedit'])
    //   },
    //   (error) => {
    //     console.log(error)
    //     this.message = "Error : Already Registered?";
    //   }
    // )
    }
 }


  






