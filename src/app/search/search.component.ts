import { Component, Inject, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  fname : string;
  user : any;
  message : any;
  obj : any;

  constructor(private route : ActivatedRoute, private service : UserServiceService, private router : Router, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {
  }

  public searchByFirstname()
  {
    let response = this.service.findByFirstname(this.fname);
    response.subscribe(data => this.user = data); 
  }
  public removeUser(id)
  {
    let response = this.service.deleteUser(id);
    response.subscribe(data => this.user = data);
    this.document.defaultView.location.reload();
  }
  
  public editById(id){
    let response = this.service.findById(id);
    response.subscribe(data => this.obj = data); 
  }

  public editNow(user_new)
  {
    let reponse = this.service.doEdit(user_new);
    reponse.subscribe(data => {
      this.message = data;
    });
  }
}
