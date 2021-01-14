import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Head = "Cars Point";
  Login = "Login";
  Registration = "Registration"
  slideIndex = 1;

  constructor() {
    //this.showSlides(slideIndex);
   }

  ngOnInit() {
  }

}
