import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  
  constructor(public httpService : HttpService){}
  ngOnInit() {
  }
  
  onSubmit(value: string){
    this.httpService.getWeather(value).then(result =>{
      this.weather = result;
    })
  }

}
