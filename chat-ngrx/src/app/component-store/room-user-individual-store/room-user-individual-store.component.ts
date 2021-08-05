import { Component, OnInit } from '@angular/core';
import { ChatComponentStore } from '../store/chat.store';

@Component({
  selector: 'app-room-user-individual-store',
  templateUrl: './room-user-individual-store.component.html',
  styleUrls: ['./room-user-individual-store.component.css'],
  providers: [ChatComponentStore]
})
export class RoomUserIndividualStoreComponent implements OnInit {

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
