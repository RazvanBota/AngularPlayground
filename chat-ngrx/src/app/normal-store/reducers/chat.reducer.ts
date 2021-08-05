import { Chat } from "../../models/chat.model";
import * as ChatActions from './../actions/chat.actions'

const initialState: Chat = {
    username: 'BOT',
    text: "Welcome!",
}

export function reducer(state: Chat[] = [initialState], action: ChatActions.Actions): Chat[] {
    switch (action.type) {
        case ChatActions.ADD_MESSAGE:
            return [...state, action.payload];
        case ChatActions.UPDATE_MESSAGES:
            return action.payload;
        default:
            return state;
    }
}