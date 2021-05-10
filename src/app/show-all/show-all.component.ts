import { UserServiceService } from '../user-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private service : UserServiceService, @Inject(DOCUMENT) private document : Document) { }

    user : any;
    obj : any;
  ngOnInit(): void {
    let response = this.service.getAllUsers();
    response.subscribe(data => this.user = data);
  }

  public removeUser(id : number){
    let response = this.service.deleteUser(id);
    response.subscribe(data => this.user = data);
    this.document.defaultView.location.reload();
  }

  public editById(id){
    let response = this.service.findById(id);
    response.subscribe(data => this.obj = data); 
  }
}
