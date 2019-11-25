import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-traineredit',
  templateUrl: './traineredit.component.html',
  styleUrls: ['./traineredit.component.css']
})
export class TrainereditComponent implements OnInit {

    
    trainer_name:string
    email_id:String
    techs
    time_slot
    linkedin_id:String
    experience:Number
    pass_word
    status:String
    _id
    message:string
    constructor(private route: ActivatedRoute, private http: HttpClient,
      private router: Router) { 
    }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this._id = params['id'];
        console.log(this._id);
      });
  
      this.http.get("http://localhost:3000/trainer/"+this._id).subscribe(
        (result) => {
          this.trainer_name = result['trainer_name'];
          this.techs = result['techs'];
          this.time_slot = result['time_slot'];
          this.linkedin_id = result['linkedin_id'];
          this.experience = result['experience'];
          this.pass_word = result['pass_word'];
           //this.error_message = "Deleted"
          // this.users = [];
          console.log('testing')
          console.log(result)
          // console.log(this.trainer_name)
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
  
    submit_form_data(){
      console.log("trainer_name : " + this.trainer_name);
      console.log("techs : " + this.techs);
      console.log("time_slot : " + this.time_slot);
      console.log("linkedin_id : " + this.linkedin_id);
      console.log("experience : " + this.experience);
      console.log("pass_word : " + this.pass_word);

  
      var body = "trainer_name=" + this.trainer_name
          + "&techs=" + this.techs 
          + "&time_slot=" + this.time_slot
          + "&linkedin_ide=" + this.linkedin_id
          + "&experience=" + this.experience
          + "&pass_word=" + this.pass_word;
    
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
      this.http.put("http://localhost:3000/trainer/"+this._id, body, 
                    {headers: headers, responseType:'text'}).subscribe(
        (result) => {
          console.log(result)
          this.message = "Congratulations, succesfully updated !"
          alert(this.message)
        },
        (error) => {
          console.log(error)
          this.message = "Error : Backend is running? or any other error";
          alert(this.message)
        }
      )
    }
  
  }
  

