import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ChatActions from './../actions/chat.actions';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public lastUserMessage = '';

  addMessage(username: string, message: string) {
    this.store.dispatch(new ChatActions.AddMessage({ username: username, text: message }))
    if (message === "delete") {
      this.store.dispatch(new ChatActions.RemoveMessage({ username: username, text: message }));
    }
  }

  ngOnInit(): void {
  }

}
