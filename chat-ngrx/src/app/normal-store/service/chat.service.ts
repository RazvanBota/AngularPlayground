import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Chat } from '../../models/chat.model';
import * as ChatActions from './../actions/chat.actions';

@Injectable()
export class ChatService {
	constructor(private store: Store<AppState>) { }

	removeMessage() {
		var conversation: Chat[] = [];
		this.store.select('conversation').subscribe(
			(messages: Chat[]) => {
				var username = messages.find(message => message.text === "delete")?.username;
				if (username == null) {
					conversation = messages;
					return;
				}

				var notDeletedMessages: Chat[] = [];
				messages.forEach(function (message) {
					if (message.username !== username) {
						notDeletedMessages.push(message);
					}
				})
				console.log(notDeletedMessages);
				conversation = notDeletedMessages;
			}
		);

		this.store.dispatch(new ChatActions.UpdateMessages(conversation))
	}
}