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

/*    const imageContainer = document.getElementById('imageContainer');
    // @ts-ignore
    const imageScrollWidth = imageContainer.scrollWidth;

    window.addEventListener('load', () => {
      self.setInterval(() => {
        // @ts-ignore
        if (imageContainer.scrollLeft !== imageScrollWidth) {
          // @ts-ignore
          imageContainer.scrollTo(imageContainer.scrollLeft + 1, 0)
        }
      }, 15)
    });*/
  }

  redirect(url: string) {
    window.open(url)
  }
}
