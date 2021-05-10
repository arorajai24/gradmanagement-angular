import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-grads-year',
  templateUrl: './grads-year.component.html',
  styleUrls: ['./grads-year.component.css']
})
export class GradsYearComponent implements OnInit {
  
  keys : Array<string> = new Array();
  values : Array<number>= new Array();
  
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    this.service.getGradsYear().subscribe((data: any) => {
      Object.keys(data).forEach(key => {
        var val = data[key];
        this.keys.push(key);
        this.values.push(val);
        })
      });
  }

  public gradyearOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public gradyearLabels = this.keys;
  public gradyearType = 'bar';
  public gradyearLegend = true;

  public gradyearData = [
    {data: this.values, label: "Grads joined per year"},
  ];
}
