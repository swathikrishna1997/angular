import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value1 = 'swathi';
  names = ['hi', 'hello'];

  addName(newItem: string) {
    this.names.push(newItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
