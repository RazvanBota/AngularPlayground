import { Chat } from "../models/chat.model";

export interface AppState {
    readonly conversation: Chat[];
}