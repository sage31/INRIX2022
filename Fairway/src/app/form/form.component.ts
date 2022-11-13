import { Component, EventEmitter, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
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
  constructor(public user: UsersService) {
  }

  ngOnInit(): void {

  }

  calculateRoute(e: any): void{
     
    e.preventDefault();
    console.log("click");

    
   
    this.user.getData2("55 Stevenson Street, San Francisco, CA", "368 Bush Street, San Francisco, CA").subscribe((data: any)=> {
      console.log(data);
      this.myEvent.emit(data.route1.coords);
      this.myEvent.emit(data.route2.coords);
      this.myEvent.emit(data.route3.coords);

      //this.comp.drawPolyline(data.route1.coords);
      
    })
  }

  @ViewChild('searchBar') searchBar: ElementRef;
  @ViewChild('temp') temp: ElementRef;

  openMenu() {
    this.searchBar.nativeElement.style.display = "block";
    this.temp.nativeElement.style.display = "none";
  }
  
  closeMenu() {
    this.searchBar.nativeElement.style.display = "none";
    this.temp.nativeElement.style.display = "block";
  }
  
}


