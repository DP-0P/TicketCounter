import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'nav', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
