import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserServiceService {

  constructor(private http : HttpClient) { }

  public getAllUsers(){
    return this.http.get("http://localhost:8080/allusers");
  }

  public deleteUser(id){
    return this.http.get("http://localhost:8080/delete-user/"+id);
  }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/save-user",user, {responseType : "text" as "json"});
  }

  public doEdit(user){
    return this.http.post("http://localhost:8080/edit-user",user, {responseType : "text" as "json"});
  }

  public findByFirstname(fname){
    return this.http.get("http://localhost:8080/search/"+fname);
  }
  
  public findById(id){
    return this.http.get("http://localhost:8080/findById/"+id);
  }

  public getSkillset(){
    return this.http.get("http://localhost:8080/skillset-trend");
  }

  public getGradsYear(){
    return this.http.get("http://localhost:8080/gradyear-trend");
  }

  public getGradsDiversity(){
    return this.http.get("http://localhost:8080/graddiversity-trend");
  }

}
