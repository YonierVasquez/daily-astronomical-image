import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daily-astronomical-image';

  click2 = false;

  onClick() {
    this.click2 = !this.click2;
  }
}
