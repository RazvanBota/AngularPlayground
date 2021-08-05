import { Action } from "@ngrx/store";
import { Chat } from "../../models/chat.model";

export const ADD_MESSAGE = '[CHAT] Add';
export const REMOVE_MESSAGE = '[CHAT] Remove';
export const LOAD_MESSAGES = '[CHAT] Load';
export const UPDATE_MESSAGES = '[CHAT] Update';

export class AddMessage implements Action {
    readonly type = ADD_MESSAGE;

    constructor(public payload: Chat) { }
}

export class RemoveMessage implements Action {
    readonly type = REMOVE_MESSAGE;

    constructor(public payload: Chat) { }
}

export class LoadMessages implements Action {
    readonly type = LOAD_MESSAGES;
}

export class UpdateMessages implements Action {
    readonly type = UPDATE_MESSAGES;

    constructor(public payload: Chat[]) { }
}

export type Actions = AddMessage | RemoveMessage | LoadMessages | UpdateMessages
