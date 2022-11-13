import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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


