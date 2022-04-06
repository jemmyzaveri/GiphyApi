import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'imageSearchFromGiphyApp';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  navigateUrl() {
    this.router.navigate(['search']);
  }
}
