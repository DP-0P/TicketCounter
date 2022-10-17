import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainAreaComponent } from './main-area/main-area.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { UserDetailTableComponent } from './user-detail-table/user-detail-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EditFormComponent } from './edit-form/edit-form.component';
import { TicketBookSuccessComponent } from './ticket-book-success/ticket-book-success.component';
import { EditSuccessComponent } from './edit-success/edit-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    MainButtonComponent,
    MainAreaComponent,
    DetailFormComponent,
    UserDetailTableComponent,
    EditFormComponent,
    TicketBookSuccessComponent,
    EditSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
