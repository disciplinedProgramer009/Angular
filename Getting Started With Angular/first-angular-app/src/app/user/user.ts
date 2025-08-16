import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // @Input({required : true}) avatar!: string;
  // @Input({required : true}) name!: string;

  avatar = input.required<string>();  // we can take input using signal's input method, we cannot assign a default value when we use required(input<string>(''))
  name = input.required<string>();
  // also input function of signal are readonly so we cannot reassign within the same component them as we did using the set method

  imagePath = computed(() => 'Users/' + this.avatar());
  // get imagePath() {
  //   return 'Users/' + this.avatar;
  // } 

  onSelectedUser(){
  }
}
