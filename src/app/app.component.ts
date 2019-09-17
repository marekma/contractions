import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: { value: Date, display: string }[] = [];
  diffs: { value: Date, display: string }[] = [];

  contraction(): void {
    var x = new Date();
    this.list.unshift({ value: x, display: x.toLocaleTimeString('pl-PL') });
    if (this.list.length > 1) {
      var y = this.diff(this.list[0].value, this.list[1].value);
      this.diffs.unshift({ value: y, display: y.toLocaleTimeString('pl-PL') });
    }
  }
  clear(): void {
    this.list = [];
    this.diffs = [];
  }

  diff(date1: Date, date2: Date) {
    //Get 1 seconds in milliseconds
    var one_second = 1000;
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = date1_ms - date2_ms;
    var difference_secs = Math.round(difference_ms / one_second);

    return new Date(0, 0, 0, 0, 0, 0, difference_ms);
  }
}
