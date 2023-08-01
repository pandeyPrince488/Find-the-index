import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  index: number;
  result: number;

  calculateNumberAtIndex(): void {
    // Implement your series logic here.
    // For example, let's use the Fibonacci series.
    if (this.index < 0) {
      this.result = NaN;
    } else if (this.index === 0) {
      this.result = 0;
    } else if (this.index === 1) {
      this.result = 1;
    } else {
      let prev = 0;
      let current = 1;
      for (let i = 2; i <= this.index; i++) {
        const next = prev + current;
        prev = current;
        current = next;
      }
      this.result = current;
    }
  }
}
