import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SocialloginService {
  url;
  constructor(private http: HttpClient) { }

  Savesresponse(responce)
  {
    this.url =  'http://localhost:64726/Api/Login/Savesresponse';
    return this.http.post(this.url,responce);
  }
}