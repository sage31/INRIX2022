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
  @ViewChild('rightMenu') rightMenu: ElementRef;

  openRightMenu() {
    this.rightMenu.nativeElement.style.display = "block";
  }
  
  closeRightMenu() {
    this.rightMenu.nativeElement.style.display = "none";
  }

}
