import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test-component',
  // templateUrl: './test-component.component.html',
  styleUrls: ['./new-comp.component.css'],
  template: '<input [value]="initUserName" (input)="onNameChange($event)"/>'
})
export class NewCompComponent {
  @Input() initUserName: string;
  @Output() userNameChange = new EventEmitter<string>();

  userName = this.initUserName || 'blah';
  // title = "Angu La la Lend";

  onNameChange(event: any) {
    this.userName = event;
    this.userNameChange.emit(event.target.value);
  }

}

