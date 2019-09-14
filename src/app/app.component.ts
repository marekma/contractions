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
    this.list.push(x.toLocaleTimeString());
    this.list.reverse();
  }
  clear(): void { 
    this.list = [];
  }
}
