import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "http://localhost:8000/findRoute";
    return this.http.get(url);
  }

  getData2(start: string, end: string){
    let url = "http://localhost:8000/findRoute?loc1=" + start + "&loc2=" + end;
    var data = {start: start,
                  end: end};
    return this.http.get(url);
  }
}
