import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imgcarousal';
  srcId = 2
  ngOnInit() {

  }

  navigateLeft() {
    if(this.srcId > 1) {
      this.srcId = this.srcId - 1; 
    } else {
      return;
    }
  }
  navigateRight() {
    if(this.srcId < 3) {
      this.srcId = this.srcId + 1; 
    } else {
      return;
    }
  }
}
