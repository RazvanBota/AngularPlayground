import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs/operators';
import { Chat } from 'src/app/models/chat.model';

@Component({
  selector: 'app-component-store',
  templateUrl: './component-store.component.html',
  styleUrls: ['./component-store.component.css']
})
export class ComponentStoreComponent implements OnInit {

  state$ = this.componentStore.state$.pipe(
    map(state => state)
  );

  constructor(private componentStore: ComponentStore<Chat[]>) {
    this.componentStore.setState([{ username: 'BOT', text: "Welcome!" }]);
  }

  public updateStore(chat: Chat) {
    this.componentStore.setState(state => [...state, chat])
  }

  ngOnInit(): void { }
}
