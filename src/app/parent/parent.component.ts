import { Component, OnInit } from '@angular/core';
import { MrserviceService} from '../mrservice.service'

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
  todaydate
  public employee:any=[]

  addName(newItem: string) {
    this.names.push(newItem);
  }
  constructor(private myservice: MrserviceService) {
    this.todaydate = this.myservice.showTodayDate();
   }
  foo = 'Hello';
  bar = 'World';
  changeFn(e:any) {
    this.foo = e.target.value;
  }
  modelChangeFn(e: string) {
    this.bar = e;
  }

  ngOnInit(): void {
    this.myservice.getEmployee().subscribe(data => this.employee=data)
    
  }

}
