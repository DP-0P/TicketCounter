import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { UserDetailTableComponent } from './user-detail-table/user-detail-table.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { TicketBookSuccessComponent } from './ticket-book-success/ticket-book-success.component';
import { EditSuccessComponent } from './edit-success/edit-success.component';

const routes: Routes = [
  { path: '', component: MainButtonComponent },
  { path: 'list', component: ListComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'booking/:id', component: MainAreaComponent },
  { path: 'bookingForm/:id', component: DetailFormComponent },
  { path: 'detailTable', component: UserDetailTableComponent },
  { path: 'editForm/:id', component: EditFormComponent },
  { path: 'bookSuccess', component: TicketBookSuccessComponent },
  { path: 'editSuccess', component: EditSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
