import { Component, Input, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  user = DUMMY_USERS;
  selectedUserName: string = 'Please select a user';

  onSelectUser(id: string) {
    const userSelected = this.user.find(user => user.id === id);
    if (userSelected) {
      this.selectedUserName = userSelected.name;
    } 
  }
}
