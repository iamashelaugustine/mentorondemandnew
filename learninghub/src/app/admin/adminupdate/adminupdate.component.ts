import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminupdateComponent implements OnInit {

    
    technologyName:string
    commission:String    
    Id:number
    message:string
    constructor(private route: ActivatedRoute, private http: HttpClient,
      private router: Router) { 
    }
  
    ngOnInit() {
          this.route.params.subscribe(params => {
            this.Id =  parseInt(this.route.snapshot.paramMap.get('id'));
            console.log(this.Id);
          });
  
      this.http.get("https://localhost:44387/adminservice/technology/"+this.Id).subscribe(
        (result) => {
          this.technologyName = result['technologyName'];
          this.commission = result['commission'];          
           //this.error_message = "Deleted"
          // this.users = [];
          //console.log('testing')
          //console.log(result)
          // console.log(this.course_name)
          // console.log(this.start_date)
          // console.log(this.trainer_name)
          // this.get_user_list()
        },
        (error) => {
          //this.error_message = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
  
    }
  
    submit_form_data(formdata){               
      formdata.id = this.Id;  
      console.log("id : " + this.Id);      
      console.log("technologyName : " + this.technologyName);
      console.log("commission : " + this.commission);

      console.log(formdata);
      
        
    
      let headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      this.http.put("https://localhost:44387/adminservice/updatetechnology/"+this.Id, formdata, 
                    {headers: headers, responseType:'text'}).subscribe(
        (result) => {
          console.log(result)
          this.message = "Congratulations, succesfully updated !"
          alert(this.message)
          this.router.navigate(['/adminedit'])
        },
        (error) => {          
          console.log(error)
          this.message = "Error : Backend is running? or any other error";
          alert(this.message)
        }
      )
    }
 }


  







































  // import { Component, OnInit } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-adminupdate',
//   templateUrl: './adminupdate.component.html',
//   styleUrls: ['./adminupdate.component.css']
// })
// export class AdminupdateComponent implements OnInit {

//   Id:number
//   technology_name:string
//   commission:string
//   message:string
//   constructor(private route: ActivatedRoute, private http: HttpClient,
//     private router: Router) { 
//   }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.Id = params['id'];
//       console.log(this.Id);
//     });

//     this.http.get("https://localhost:44343/api/updatechnology/"+this.Id).subscribe(
//       (result) => {
       
//         this.technology_name = result['TechnologyName'];
//         this.commission = result['Commission'];        
//         // this.error_message = "Deleted"
//         // this.users = [];
      
//         console.log(this.technology_name)
//         console.log(this.commission)        
//         // this.get_user_list()
//       },
//       (error) => {
//         //this.error_message = "Error occured, check whether Backend is running!";
//         console.log(error)
//       }
//     )

//   }

//   submit_form_data(form){
//     console.log("technology_name : " + form.TechnologyName);
//     console.log("commission: " +form.Commission);

//     var body = {Id:this.Id,
//       technology_name: form.TechnologyName,
//       commission : form.Commission}; 
        
//     let headers = new HttpHeaders({'Content-Type': 'application/json'});

//     this.http.put("https://localhost:44343/api/Admin/updatetechnology/"+this.Id, body, 
//                   {headers: headers, responseType:'text'}).subscribe(
//       (result) => {
//         console.log(result)
//         this.message = "Congratulations, You had successfully Updated"
//       },
//       (error) => {
//         console.log(error)
//         this.message = "Error : Backend is running? or any other error";
//       }
//     )
//     }
//   }
  