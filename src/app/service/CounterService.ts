import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  activeInactive = 0;
  inactiveActive = 0;

  incrementActiveToInactive() {
    this.activeInactive++;
    console.log('active/inactive = ' + this.activeInactive);
  }

  incrementInActiveToActive() {
    this.inactiveActive++;
    console.log('inactive/active = ' + this.inactiveActive);
  }

}
