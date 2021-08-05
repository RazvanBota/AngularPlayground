import { Component, OnInit } from '@angular/core';
import { ChatComponentStore } from '../store/chat.store';

@Component({
  selector: 'app-room-user-store',
  templateUrl: './room-user-store.component.html',
  styleUrls: ['./room-user-store.component.css']
})
export class RoomUserStoreComponent implements OnInit {

  conversation$ = this.store.chat$;
  
  constructor(public store: ChatComponentStore) {}

  ngOnInit(): void {
  }

  addMessage(username: string, message: string) {
    this.store.addChat({username: username, text: message});
  }

  addPartialMessage(username: string, message: string) {
    this.store.patchState((state: { conversation: any; }) => ({
      conversation: [...state.conversation, {username: username, text: message}]
    }));
  }

}
