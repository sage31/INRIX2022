
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('mySidebar') mySidebar: ElementRef;
  @ViewChild('main') main: ElementRef;

  openNav() {
    this.mySidebar.nativeElement.style.width = "175px";
    this.main.nativeElement.style.marginLeft = "175px";
  }
  closeNav() {
    this.mySidebar.nativeElement.style.width = "0";
    this.main.nativeElement.style.marginLeft = "0";
  }

}
