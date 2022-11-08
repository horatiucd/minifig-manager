import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {MinifigListComponent} from './minifig-list/minifig-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'minifigs', pathMatch: 'full'},
  {path: 'minifigs', component: MinifigListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
