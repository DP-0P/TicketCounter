import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { movieData } from '../utilities/movieData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  moviesData: any


  constructor(private service: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMoviesDetails()
  }

  test(moive: movieData) {

    // console.log(movieData[0].name)
    this.service.putData(moive)
    this.router.navigate(['bookingForm']);
  }

  // bookTicket(id:number,ticketsAvailable:number){
  //   console.log(id,ticketsAvailable)
  //   console.log(this.moviesData[1].ticketsAvailable = ticketsAvailable-2)
  //   console.log(this.moviesData[1])
  // }

  getMoviesDetails() {
    this.service.getMovieDetails().subscribe((data: movieData[]) => {
      this.moviesData = data
    })
  }

  bookTicket(movie: movieData) {

    // this.service.updateTicketDetails(id,ticketsAvailable)
    
    this.router.navigate(['booking/'+movie.id]);
    // this.service.updateTicketDetails(movie).subscribe(Response => { this.moviesData = Response })
    // this.service.putData(movie)
  }


}
