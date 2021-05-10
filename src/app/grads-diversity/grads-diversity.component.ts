import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-grads-diversity',
  templateUrl: './grads-diversity.component.html',
  styleUrls: ['./grads-diversity.component.css']
})
export class GradsDiversityComponent implements OnInit {

  keys : Array<string> = new Array();
  values : Array<number>= new Array();

  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    this.service.getGradsDiversity().subscribe((data: any) => {
      Object.keys(data).forEach(key => {
        var val = data[key];
        this.keys.push(key);
        this.values.push(val);
        })
      });
  }
  public graddiversityChartLabels = this.keys;
  public graddiversityChartData = this.values;
  public graddiversityChartType = 'doughnut';

}
