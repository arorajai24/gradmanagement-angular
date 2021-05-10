import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  trends = [
    {"id" : 1 , "name" : "Skillset Among Candidates"},
    {"id" : 2 , "name" : "Candidates joined each year"},
    {"id" : 3 , "name" : "Joining Location of Grads"} 
  ]

  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
  }

  openChart(id : number)
  {
    if(id===1)
    {
      this.router.navigate(['bar-chart'] , {relativeTo : this.route});
    }
    else if(id===2)
    {
      this.router.navigate(['grads-year'] , {relativeTo : this.route});
    }
    else if(id===3)
    {
      this.router.navigate(['grads-diversity'] , {relativeTo : this.route});
    }
  }
}
