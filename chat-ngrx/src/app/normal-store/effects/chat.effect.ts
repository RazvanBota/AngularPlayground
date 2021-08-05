import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ChatActions from '../actions/chat.actions';
import { tap } from 'rxjs/operators';
import { ChatService } from "../service/chat.service";
// import { ChatService } from "../service/chat.service";

@Injectable()
export class ChatEffects {

    removeMessages$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChatActions.REMOVE_MESSAGE),
            tap(() => { this.chatService.removeMessage(); }),
            // withLatestFrom(this.store.select())
        ), { dispatch: false }
    );

    constructor(private actions$: Actions, private chatService: ChatService) { }
}