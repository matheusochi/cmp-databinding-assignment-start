import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public oddNumbers = [];
  public evenNumbers = [];

  onIntervalFired(firedNumber) {
    if (firedNumber % 2 == 0) {
      this.evenNumbers.push(firedNumber);
    } else if (firedNumber % 2 == 1) {
      this.oddNumbers.push(firedNumber)
    }
  }
}
