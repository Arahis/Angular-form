import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submittedUsers = [];

  onSubmitUser(user: object) {
    this.submittedUsers = [...this.submittedUsers, user];
  }
}
