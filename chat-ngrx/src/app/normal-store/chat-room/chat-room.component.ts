import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})

export class ChatRoomComponent implements OnInit {

  public conversation: Observable<Chat[]>;

  constructor(private store: Store<AppState>) {
    this.conversation = this.store.select('conversation');
  }

  ngOnInit(): void {
  }

}
