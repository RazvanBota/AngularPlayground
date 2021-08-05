import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/models/chat.model';
import { ChatComponentStore } from 'src/app/component-store/store/chat.store';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {

  @Input() conversation$: Observable<Chat[]> = new Observable<Chat[]>();

  public stateConversation$;

  constructor(public store: ChatComponentStore) {
    this.stateConversation$ = this.store.chat$
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // this.stateConversation$.forEach()
  }
}
