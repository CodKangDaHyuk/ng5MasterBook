import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserItemngComponent } from './user-itemng/user-itemng.component';


@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserItemngComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
