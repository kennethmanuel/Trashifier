import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openExternalUrl() {
    const url = 'https://github.com/kennethmanuel/Trashifier'; // Replace with your desired external URL
    window.open(url, '_system');
  }

}
