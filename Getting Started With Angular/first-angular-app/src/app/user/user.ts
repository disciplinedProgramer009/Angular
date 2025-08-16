import { Component, computed, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { EventEmitter } from '@angular/core';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required : true}) id!: string;
  @Input({required : true}) avatar!: string;
  @Input({required : true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'Users/' + this.avatar;
  } 

  onSelectedUser(){
    this.select.emit(this.id);
  }
}
