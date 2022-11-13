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
    //function that runs when form is submitted
    /*function submitForm(event) {
      event.preventDefault();

     
    }
    */

    //assign form to a form variable, start and destination
    const form = document.getElementById('form');

    //form?.addEventListener('submit', submitForm);
  }

  calculateRoute(e: any): void{
    e.preventDefault(); 
    
    
   
    this.user.getData2("San Jose", "Santa Clara").subscribe((data: any)=> {
      console.log(data);
    })
  }

}


