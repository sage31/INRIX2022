import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import * as L from 'leaflet';
import { AfterViewInit } from '@angular/core';
=======
>>>>>>> 441dc816ce818ce9b6e014a14fb3d7481d57e3ad

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
<<<<<<< HEAD
export class MapComponent implements AfterViewInit {
  private map = L.map('map', {
    center: [ 39.8282, -98.5795 ],
    zoom:3
  });

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom:3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
export class HeaderComponent implements OnInit {
=======
export class MapComponent implements OnInit {
>>>>>>> 441dc816ce818ce9b6e014a14fb3d7481d57e3ad

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
=======
  }

>>>>>>> 441dc816ce818ce9b6e014a14fb3d7481d57e3ad
}
