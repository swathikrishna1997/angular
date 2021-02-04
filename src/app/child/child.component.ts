import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input() name: any;
  @Output() newNameEvent = new EventEmitter<string>();
  addNewName(value: string) {
    this.newNameEvent.emit(value);
  }

}
