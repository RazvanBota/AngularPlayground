import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStoreComponent } from './component-store.component';
import { ChatComponentStore } from './store/chat.store';
import { ComponentStore } from '@ngrx/component-store';
import { ChatRoomComponent } from './room/chat-room.component';
import { UserChildComponent } from './user-child/user-child.component';
import { RoomUserStoreComponent } from './room-user-store/room-user-store.component';
import { RoomUserIndividualStoreComponent } from './room-user-individual-store/room-user-individual-store.component';
import { ComponentStoreRoutingModule } from './component-store-routing.module';

@NgModule({
  declarations: [
    ComponentStoreComponent,
    ChatRoomComponent,
    UserChildComponent,
    RoomUserStoreComponent,
    RoomUserIndividualStoreComponent,
  ],
  imports: [
    CommonModule,
    ComponentStoreRoutingModule,
  ],
  providers: [
    ChatComponentStore,
    ComponentStore
  ],
})

export class ComponentStoreModule { }
