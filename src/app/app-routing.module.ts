import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDatailsComponent } from './components/user-datails/user-datails.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: 'user-datails', component: UserDatailsComponent },
  { path: 'todos', component: TodosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
