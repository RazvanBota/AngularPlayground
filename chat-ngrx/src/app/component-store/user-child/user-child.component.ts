import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { ChatComponentStore } from '../store/chat.store';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {

  @Output() newMessage: EventEmitter<Chat> = new EventEmitter<Chat>();

  constructor(private readonly store: ChatComponentStore) { }

  ngOnInit(): void {
  }

  addMessage(username: string, message: string) {
    this.store.addChat({ username: username, text: message });
  }
}
