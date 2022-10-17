import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  @Input() name: string = ''
  @Output() passName = new EventEmitter()
  serviceData: any

  constructor(private dataService: MovieService, private route: ActivatedRoute, private router: Router) {
    const data = this.dataService.getDataStream();
    data.subscribe({
      next: (data: any) => {
        this.serviceData = data
        console.log(this.serviceData)
      },
      error: (err: any) => {
        console.log(err)
      }
    })

  }

  ngOnInit(): void {
    let movieId = this.route.snapshot.paramMap.get('id')
    console.log(movieId);
    const pass: string = movieId !== null ? movieId : ''
    this.dataService.getMovieData(parseInt(pass)).subscribe(res => { this.serviceData = res })
    console.log(this.serviceData)

  }

  changeVariable() {
    this.passName.next('updated')
  }

  bookingForm(id:number){
    console.log('testing')
    this.router.navigate(['bookingForm/'+id]);
  }

  trailer(link:any){
    window.open(link,"_blank")
  }

}
