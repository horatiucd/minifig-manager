import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinifigListComponent } from './minifig-list/minifig-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMinifigComponent } from './add-minifig/add-minifig.component';
import { FormsModule} from '@angular/forms';
import { EditMinifigComponent } from './edit-minifig/edit-minifig.component';
import { ViewMinifigComponent } from './view-minifig/view-minifig.component';

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
    ViewMinifigComponent,
    AddMinifigComponent,
    EditMinifigComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
