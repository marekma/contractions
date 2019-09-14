import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: string[] = [];
  contraction(): void {
    var x = new Date();
    this.list.unshift(x.toLocaleTimeString('pl-PL'));
  }
  clear(): void {
    this.list = [];
  }
}
