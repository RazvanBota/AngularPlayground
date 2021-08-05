import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ChatActions from './../actions/chat.actions';

@Component({
  selector: 'app-chat-user-three',
  templateUrl: './chat-user-three.component.html',
  styleUrls: ['./chat-user-three.component.css']
})
export class ChatUserThreeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addMessage(username: string, message: string){
    this.store.dispatch(new ChatActions.AddMessage({username: username, text: message}))
  }

  ngOnInit(): void {
  }

}
