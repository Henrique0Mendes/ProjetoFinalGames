import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoComponent } from './blackJack/components/jogo/jogo.component';
import { HomeComponent } from './components/home/home.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    HomeComponent,
    FourOFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
