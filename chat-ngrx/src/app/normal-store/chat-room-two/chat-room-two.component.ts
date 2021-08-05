import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Chat } from '../../models/chat.model';
import * as ChatActions from './../actions/chat.actions';

@Component({
  selector: 'app-chat-room-two',
  templateUrl: './chat-room-two.component.html',
  styleUrls: ['./chat-room-two.component.css']
})
export class ChatRoomTwoComponent implements OnInit {

  public conversation: Observable<Chat[]>;

  constructor(private store: Store<AppState>) {
    this.conversation = this.store.select('conversation');
  }

  ngOnInit(): void {
  }

}
