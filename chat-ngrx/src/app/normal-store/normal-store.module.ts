import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalStoreComponent } from './normal-store.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ChatRoomTwoComponent } from './chat-room-two/chat-room-two.component';
import { ChatUserTwoComponent } from './chat-user-two/chat-user-two.component';
import { ChatUserThreeComponent } from './chat-user-three/chat-user-three.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { ChatEffects } from './effects/chat.effect';
import { ChatService } from './service/chat.service';
import { NormalStoreRoutingModule } from './normal-store-routing.module';


@NgModule({
  declarations: [
    NormalStoreComponent,
    ChatRoomComponent,
    ChatUserComponent,
    ChatRoomTwoComponent,
    ChatUserTwoComponent,
    ChatUserThreeComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ChatEffects]),
    NormalStoreRoutingModule,
  ],
  providers: [
    ChatService
  ]
})
export class NormalStoreModule { }
