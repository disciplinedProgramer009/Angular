import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]); // data containers that hold the state (i.e. selected user and manages to update the UI)
  imagePath = computed(() => 'Users/' + this.selectedUser().avatar); // computed property to derive the image path based on the selected user
  // computed properties are used to derive values based on other signals or properties and are often used with signal (only gets updated when the signal on which it is dependent )

  // get imagePath() {
  //   return 'Users/' + this.selectedUser.avatar;
  // } 

  onSelectedUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // set method is used to set the value of the signal
  }
}
