import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public user: UsersService) {
  }

  ngOnInit(): void {

  }

  calculateRoute(e: any): void{
    e.preventDefault(); 
    
    console.log("click");
   
    this.user.getData2("55 Stevenson Street, San Francisco, CA", "368 Bush Street, San Francisco, CA").subscribe((data: any)=> {
      console.log(data);
    })
  }

}


