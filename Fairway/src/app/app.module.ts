import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationInputComponent } from './location-input/location-input.component';
<<<<<<< HEAD
import { SearchboxComponent } from './searchbox/searchbox.component';
import { MapComponent } from './map/map.component';
=======
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 441dc816ce818ce9b6e014a14fb3d7481d57e3ad

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationInputComponent,
<<<<<<< HEAD
    SearchboxComponent,
    MapComponent
=======
    MapComponent,
    FooterComponent
>>>>>>> 441dc816ce818ce9b6e014a14fb3d7481d57e3ad
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
