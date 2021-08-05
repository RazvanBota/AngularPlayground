import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from "@angular/core";
import { Chat } from 'src/app/models/chat.model';
import { Observable } from 'rxjs';

export interface ChatInitialState {
    conversation: Chat[];
}

@Injectable()
export class ChatComponentStore extends ComponentStore<ChatInitialState> {
    constructor() {
        super({
            conversation: [{ username: 'BOT', text: "Welcome!" }]
        });
    }

    readonly chat$: Observable<Chat[]> = this.select(state => state.conversation);
    readonly addChat = this.updater((state, chat: Chat) => ({ conversation: [...state.conversation, chat] }));
}