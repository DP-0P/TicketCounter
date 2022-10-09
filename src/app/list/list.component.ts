import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { movieData,movie } from '../utilities/movieData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // moviesData: movieData[] = []
  
  // md:[] = movieData
  
  // arr: String[] = movieData

  moviesData: movieData[] = movie

  
  constructor(private service: MovieService) { 
    
    // let arr = movieData
  }
  
  ngOnInit(): void {
    // this.getMoviesDetails()
    
  }
  
  test(){
    
    // console.log(movieData[0].name)
  }

  bookTicket(id:number,ticketsAvailable:number){
    console.log(id,ticketsAvailable)
    console.log(this.moviesData[1].ticketsAvailable = ticketsAvailable-2)
    console.log(this.moviesData[1])
  }

  
  /*
  getMoviesDetails(){
    this.service.getMovieDetails().subscribe((data:movieData[])=>{
      this.moviesData = data
    })
  }
  */

  /*
  bookTicket(id:number,ticketsAvailable:number){

    // this.service.updateTicketDetails(id,ticketsAvailable)

    this.service.updateTicketDetails(id,ticketsAvailable)

    setTimeout(()=>{
      this.getMoviesDetails()
      console.log('chk chk')
    },4000)
    
  }
  */

}
