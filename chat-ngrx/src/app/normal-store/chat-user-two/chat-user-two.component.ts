import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ChatActions from './../actions/chat.actions';

@Component({
  selector: 'app-chat-user-two',
  templateUrl: './chat-user-two.component.html',
  styleUrls: ['./chat-user-two.component.css']
})
export class ChatUserTwoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addMessage(username: string, message: string){
    this.store.dispatch(new ChatActions.AddMessage({username: username, text: message}))
  }

  ngOnInit(): void {
  }
}
