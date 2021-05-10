import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  keys : Array<string> = new Array();
  values : Array<number>= new Array();
  parser : any;
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    this.service.getSkillset().subscribe((data: any) => {
      Object.keys(data).forEach(key => {
        var val = data[key];
        this.keys.push(key);
        this.values.push(val);
        this.parser.series.push({name : key, value: val});
        })
      });
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = this.keys;
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: this.values, label: "Skillset Variation among Grads"},
  ];

}
