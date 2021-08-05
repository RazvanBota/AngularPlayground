import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'normalstore', component: NormalStoreComponent },
  // { path: 'componentstore', component: ComponentStoreComponent }
  { path: 'normalstore', loadChildren: () => import('./normal-store/normal-store.module').then(m => m.NormalStoreModule) },
  { path: 'componentstore', loadChildren: () => import('./component-store/component-store.module').then(m => m.ComponentStoreModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }