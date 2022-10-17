import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MovieService } from '../services/movies.service';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail-table',
  templateUrl: './user-detail-table.component.html',
  styleUrls: ['./user-detail-table.component.css']
})
export class UserDetailTableComponent implements OnInit {

  displayedColumns = ['name', 'movieName', 'show', 'num', 'date', 'edit']
  dataSource !: MatTableDataSource<any>
  userDetails: any

  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild(MatSort) matSort!: MatSort

  constructor(private service: MovieService, private route: Router) { }

  ngOnInit(): void {
    this.service.getUserData().subscribe((Response: any) => {
      this.dataSource = new MatTableDataSource(Response)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort
    })
  }

  editUser(id: any) {
    this.route.navigate(['editForm/' + id]);
  }

}
