import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSelect()
  {
    this.router.navigate(['/operations/candidate-management']);
  }
}
