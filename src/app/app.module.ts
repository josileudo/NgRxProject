import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardValueComponent } from './components/card-value/card-value.component';
import { StoreModule } from '@ngrx/store';

import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CardValueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
