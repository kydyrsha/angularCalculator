import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result: string = '0';
  mainPad: string[] = ['CE', 'C', '<', '/'];
  sidePad: string[] = ['7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '='];

  constructor() { }

  ngOnInit(): void {
  }

  private prevValue: string = '';
  private curValue: string = '';

  addToExpression(value: string) {
    if (this.result != '') {
      this.prevValue = this.curValue;
      this.curValue = value;
    }

    if (value == 'CE') {
      this.result = '';
    } else if (value == 'C') {
      this.result = this.prevValue != "=" ? this.result.slice(0, -1): this.result;
    } else if (value == '<') {
      this.result = this.prevValue != "=" ? this.result.slice(0, -1): this.result;
    } else if (value == '=') {
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }


}
