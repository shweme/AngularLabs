import { Component, OnInit } from '@angular/core';
import {UserService} from 'user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datapersistence';
  username = '';
  email = '';
  birthdate = '';
  age = 0;
  valid = false;
  constructor(private userService: UserService){
  }

  ngOnInit(){

    if(typeof(Storage) !== "undefined"){
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("email", this.email);
      sessionStorage.setItem("birthdate", this.birthdate);
      sessionStorage.setItem("age", this.age);
      sessionStorage.setItem("valid", this.valid);
      console.log("Session storage " + sessionStorage.getItem("valid"));
    }
    else{
      console.log("No storage support");
    }
  }
}