import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  e_address : string;
  s_address : string;

  @Output() myEvent = new EventEmitter();
  @Output() myEvent2 = new EventEmitter();
  constructor(public user: UsersService) {
  }

  ngOnInit(): void {

  }

  calculateRoute(e: any): void{
     
    e.preventDefault();
    console.log("click");

    
    
   
    this.user.getData2(this.e_address, this.s_address).subscribe((data: any)=> {
      console.log(data);
      this.myEvent2.emit(data);
      this.myEvent.emit(data.route1.coords);
      this.myEvent.emit(data.route2.coords);
      this.myEvent.emit(data.route3.coords);


      //this.comp.drawPolyline(data.route1.coords);
      
    })
  }

}


