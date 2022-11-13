import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

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

}
