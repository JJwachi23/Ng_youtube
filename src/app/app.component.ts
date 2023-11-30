import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 0;

  calBuffet(value: string) {
    const price = Number(value);
    // this.value = Number(value) * 3 / 4
    // this.value = (Number(value) * 3) / 4;
    this.value = (price * 3) / 4
  }

  testClick() {
    console.log('test EventBinding');
  }

  testNumberChange(value: number) {
    console.log('test NumberChange form action-bar: ', value);
  }
}
