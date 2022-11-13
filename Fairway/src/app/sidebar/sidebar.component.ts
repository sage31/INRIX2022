import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  da: HTMLElement | null;
  ma: HTMLElement | null;
  pa: HTMLElement | null;
  ta: HTMLElement | null;

  db: HTMLElement | null;
  mb: HTMLElement | null;
  pb: HTMLElement | null;
  tb: HTMLElement | null;


  dc: HTMLElement | null;
  mc: HTMLElement | null;
  pc: HTMLElement | null;
  tc: HTMLElement | null;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.da = document.getElementById("dangerA");
  this.ma = document.getElementById("milesA");
  this.pa = document.getElementById("priceA");
  this.ta = document.getElementById("timeA");

  this.db = document.getElementById("dangerB");
  this.mb = document.getElementById("milesB");
  this.pb = document.getElementById("priceB");
  this.tb = document.getElementById("timeB");

  this.dc = document.getElementById("dangerC");
  this.mc = document.getElementById("milesC");
  this.pc = document.getElementById("priceC");
  this.tc = document.getElementById("timeC");
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

    display(data: any) {
      let data1 = data.route1;
      let data2 = data.route2;
      let data3 = data.route3;

      let da = "Danger: "+ data.route1.multiplier+" / 1.5";
      let ma = "Distance: "+data.route1.distance+" miles";
      let pa = "Price: "+data.route1.tripPrice+"  dollars";
      let ta = "Time: "+data.route1.tripTime+" minutes";

      if(this.da != null)
      this.da.innerHTML = ma;
      if(this.ma != null)
      this.ma.innerHTML = da;
      if(this.pa != null)
      this.pa.innerHTML = pa;
      if(this.ta != null)
      this.ta.innerHTML = ta;

      let db = "Danger: "+ data.route2.multiplier+" / 1.5";
      let mb = "Distance: "+data.route2.distance+" miles";
      let pb = "Price: "+data.route2.tripPrice+"  dollars";
      let tb = "Time: "+data.route2.tripTime+" minutes";

      if(this.db != null)
      this.db.innerHTML = mb;
      if(this.mb != null)
      this.mb.innerHTML = db;
      if(this.pb != null)
      this.pb.innerHTML = pb;
      if(this.tb != null)
      this.tb.innerHTML = tb;

      let dc = "Danger: "+ data.route3.multiplier+" / 1.5";
      let mc = "Distance: "+data.route3.distance+" miles";
      let pc = "Price: "+data.route3.tripPrice+"  dollars";
      let tc = "Time: "+data.route3.tripTime+" minutes";

      if(this.dc != null)
      this.dc.innerHTML = mc;
      if(this.mc != null)
      this.mc.innerHTML = dc;
      if(this.pc != null)
      this.pc.innerHTML = pc;
      if(this.tc != null)
      this.tc.innerHTML = tc;
      
      
    }
}
