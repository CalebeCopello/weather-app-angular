import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from 'app/models/weather.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  cityName: string = 'Rio Grande';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
  onSubmit() {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (r) => {
        this.weatherData = r;
        // console.log(r);
      },
    });
  }
}
