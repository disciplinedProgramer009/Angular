import { Component, computed, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { EventEmitter } from '@angular/core';

import { type UserType } from './user.model';
import { Card } from "../shared/card/card";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type UserType = { id: string; avatar: string; name: string };



@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) users!: UserType;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'Users/' + this.users.avatar;
  } 

  onSelectedUser(){
    this.select.emit(this.users.id);
  }
}
