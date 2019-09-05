import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Pages/nav/nav.component';
import { ExploraofertaComponent } from './Pages/exploraoferta/exploraoferta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ExploraofertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
