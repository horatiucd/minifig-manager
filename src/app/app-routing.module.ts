import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {MinifigListComponent} from './minifig-list/minifig-list.component';
import {AddMinifigComponent} from './add-minifig/add-minifig.component';

const routes: Routes = [
  {path: '', redirectTo: 'minifigs', pathMatch: 'full'},
  {path: 'minifigs', component: MinifigListComponent},
  {path: 'add-minifig', component: AddMinifigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
