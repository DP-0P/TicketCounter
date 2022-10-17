import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mainPage() {
    this.router.navigate(['/list']);
  }

  tableTest(){
    this.router.navigate(['detailTable'])
  }

}
