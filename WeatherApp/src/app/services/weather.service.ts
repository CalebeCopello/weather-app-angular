import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from 'app/models/weather.module';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(city: string): Observable<WeatherData> {
    const apiUrl = `${environment.weatherApiBaseUrl}/${encodeURIComponent(city)}/?${environment.watherApiMetricSystem}`;

    const params = new HttpParams().set('key', environment.weatherApiKey);

    return this.http.get<WeatherData>(apiUrl, { params });
    // return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
    //     params: new HttpParams()
    //     .set('key', environment.weatherApiKey)
    // });
  }
}
