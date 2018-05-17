import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const HEADER = {headers: new Headers({'content-type': "application.json"})};
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const PARAMS = "&APPID=1d2efb7895189599b797976de4911de2&units=metric&lang=fr&cnt=20"
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
  getWeather(location:string){
      return this.http.get(`${URL}${location}${PARAMS}`).toPromise();
  }
}
