import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinifigListComponent } from './minifig-list/minifig-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MinifigAddComponent } from './minifig-add/minifig-add.component';
import { FormsModule} from '@angular/forms';
import { MinifigEditComponent } from './minifig-edit/minifig-edit.component';
import { MinifigViewComponent } from './minifig-view/minifig-view.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MinifigListComponent,
    MinifigViewComponent,
    MinifigAddComponent,
    MinifigEditComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
