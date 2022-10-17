import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userData } from '../utilities/userDetails';
import { MovieService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  userDetails: any
  @Input() name: string = ''
  @Output() passName = new EventEmitter()
  serviceData: any
  myForm!: FormGroup;
  movieId !: any
  temp: any

  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id')
    console.log(this.movieId);
    const pass: string = this.movieId !== null ? this.movieId : ''
    this.service.getMovieData(parseInt(pass)).subscribe(res => { this.serviceData = res })
    console.log(this.serviceData)

    this.myForm = new FormGroup({
      userName: new FormControl(),
      date: new FormControl(),
      tickets: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      select: new FormControl()
    })

  }

  submit(form: FormGroup) {
    let user = new userData()
    user.name = form.value.userName
    user.movieName = this.serviceData.name
    user.phone = form.value.phone
    user.email = form.value.email
    user.date = form.value.date
    user.numberOfTickets = form.value.tickets
    user.timing = form.value.select
    user.movieID = this.movieId
    this.service.updateTicketDetails(this.serviceData, form.value.tickets)
    this.service.addNewUser(user)
    this.router.navigate(['bookSuccess'])
  }
}
