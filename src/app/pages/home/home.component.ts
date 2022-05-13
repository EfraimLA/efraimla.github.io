import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  showScrollArrow = true;

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.showScrollArrow = window.scrollY <= 400);
  }

}
