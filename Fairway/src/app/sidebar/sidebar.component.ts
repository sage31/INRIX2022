import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //new stuff
  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChild('temp') temp: ElementRef;

  openMenu() {
    this.sidebar.nativeElement.style.display = "block";
    this.temp.nativeElement.style.display = "none";
  }
  
  closeMenu() {
    this.sidebar.nativeElement.style.display = "none";
    this.temp.nativeElement.style.display = "block";
  }

}
