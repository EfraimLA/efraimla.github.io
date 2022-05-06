import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = [
    {
      image: 'assets/images/nmf_tickets_capture.webp',
      title: 'NMF Tickets Capture',
      description: 'A web application to capture tickets for the NMF',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
