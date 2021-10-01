import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormComponent } from './components/form.component';
import { HeaderComponent } from './components/header.component';
import { ItemComponent } from './components/item.component';
import { ListComponent } from './components/list.component';
import { MylevelPipe } from './pipes/mylevel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ListComponent,
    ItemComponent,
    MylevelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
