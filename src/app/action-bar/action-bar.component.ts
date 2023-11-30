import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  //@Input() เป็นการเชื่อมโยงที่เป็น directive property ระหว่าง Bussiness Logic กับ Teamplate
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();

  counter: number = 0;
  constructor() {

  }

  ngOnInit(): void {

  }

  decrease() {
    //ในเงื่อนไขเป็นการบอกว่าถ้า counter - 1 มีค่า >= 0 ให้เข้าเงื่อนไข counter มีค่าเท่ากับ counter ลบด้วย step 
    if (this.counter - 1 >= 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }

  //ในเงื่อนไขให้เช็คว่าถ้า counter + กับจำนวน step ให้ผูกค่าไว้กับฝั่ง Template(HTML) *ทำงานเหมือนกับ method decrease() เลยแค่ทำให้โค้ดอ่านแล้วดูง่าย
  increase() {
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }

  }

}
