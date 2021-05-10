import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.css']
})
export class CandidateManagementComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
  }

  onSearch()
  {
    this.router.navigate(['search'] , {relativeTo : this.route});
  }
  onShowAll()
  {
    this.router.navigate(['show-all'], {relativeTo : this.route});
  }
  onRegister()
  {
    this.router.navigate(['register'], {relativeTo : this.route});
  }
  onTrends()
  {
    this.router.navigate(['trends'], {relativeTo : this.route});
  }
}
