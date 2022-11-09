import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {MinifigAddComponent} from './minifig-add/minifig-add.component';
import {MinifigEditComponent} from './minifig-edit/minifig-edit.component';
import {MinifigViewComponent} from './minifig-view/minifig-view.component';
import {MinifigListComponent} from './minifig-list/minifig-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'minifig-list', pathMatch: 'full'},
  {path: 'minifig-list', component: MinifigListComponent},
  {path: 'minifig-view/:id', component: MinifigViewComponent},
  {path: 'minifig-add', component: MinifigAddComponent},
  {path: 'minifig-edit/:id', component: MinifigEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
