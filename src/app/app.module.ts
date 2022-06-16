import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CardValueComponent } from './components/card-value/card-value.component';
import { appReducer } from './store/app.state';
import { environment } from '../environments/environment';
import { UserDatailsComponent } from './components/user-datails/user-datails.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEffectService } from './store/todo-effect.service';

@NgModule({
  declarations: [
    AppComponent,
    CardValueComponent,
    UserDatailsComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    EffectsModule.forRoot([TodoEffectService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
