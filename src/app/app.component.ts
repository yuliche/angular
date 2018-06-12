import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  name: string = "Tom";
  title =  "Angu La la Lend";

  onUserNameChange(val) {
    this.name = val;
  }
}

