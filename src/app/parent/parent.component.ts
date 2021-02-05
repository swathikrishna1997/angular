import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value1 = 'swathi';
  names = ['hi', 'hello'];
  num="98";
  num2=77;
  name="swathi"

  addName(newItem: string) {
    this.names.push(newItem);
  }
  constructor() { }
  foo = 'Hello';
  bar = 'World';
  changeFn(e:any) {
    this.foo = e.target.value;
  }
  modelChangeFn(e: string) {
    this.bar = e;
  }

  ngOnInit(): void {
  }

}
