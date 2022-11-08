import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {MinifigListComponent} from './minifig-list/minifig-list.component';
import {AddMinifigComponent} from './add-minifig/add-minifig.component';
import {EditMinifigComponent} from './edit-minifig/edit-minifig.component';
import {ViewMinifigComponent} from './view-minifig/view-minifig.component';

const routes: Routes = [
  {path: '', redirectTo: 'minifigs', pathMatch: 'full'},
  {path: 'minifigs', component: MinifigListComponent},
  {path: 'view-minifig/:id', component: ViewMinifigComponent},
  {path: 'add-minifig', component: AddMinifigComponent},
  {path: 'edit-minifig/:id', component: EditMinifigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
