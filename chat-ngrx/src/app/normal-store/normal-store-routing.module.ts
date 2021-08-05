import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalStoreComponent } from './normal-store.component';

const routes: Routes = [
  { path: '', component: NormalStoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalStoreRoutingModule { }
