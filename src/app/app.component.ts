import {Component} from '@angular/core';
import {CounterService} from './service/CounterService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeInactive = 0;
  inactiveActive = 0;

  constructor(private countService: CounterService) {
    this.activeInactive = this.countService.activeInactive;
    this.inactiveActive = this.countService.inactiveActive;
  }


}
