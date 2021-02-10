import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { FormsComponent } from './pages/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    PricingComponent,
    BlocksComponent,
    FormsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
