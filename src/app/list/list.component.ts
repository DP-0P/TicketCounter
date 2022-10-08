import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { movieData } from '../utilities/movieData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  moviesData: movieData[] = []

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.getMoviesDetails()
  }

  getMoviesDetails(){
    this.service.getMovieDetails().subscribe((data:movieData[])=>{
      this.moviesData = data
    })
  }

  bookTicket(id:number,ticketsAvailable:number){
    this.service.updateTicketDetails(id,ticketsAvailable)
  }

}
