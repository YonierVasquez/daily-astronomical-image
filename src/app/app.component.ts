import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedMode = 'A specific day'

  // For a specific day
  date1!: NgbDateStruct;

  // For a days range
  date2!: NgbDateStruct;
  date3!: NgbDateStruct;

  // For random images
  quantity!: number;

  changeMode(mode: string) {
    this.selectedMode = mode;
  }
}
