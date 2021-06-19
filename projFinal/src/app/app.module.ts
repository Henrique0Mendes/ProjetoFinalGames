import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { CriptoComponent } from './components/cripto/cripto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FourOFourComponent,
    BlackjackComponent,
    CriptoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
