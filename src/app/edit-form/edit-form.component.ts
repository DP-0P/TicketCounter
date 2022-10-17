import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movies.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input() name: string = ''
  @Output() passName = new EventEmitter()
  serviceData: any
  movieData: any
  myForm !: FormGroup
  user:any

  constructor(@Inject(DOCUMENT) private document: HTMLDocument,private dataService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let Id = this.route.snapshot.paramMap.get('id')
    const pass: string = Id !== null ? Id : ''
    this.dataService.getUserDetail(parseInt(pass)).subscribe(res => { this.serviceData = res })
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

  submit(form: FormGroup,tt:any) {
    let upTick = parseInt(form.value.tickets) - this.serviceData.numberOfTickets
    this.dataService.getMovieData(parseInt(tt)).subscribe(res => { this.movieData = res })
    this.serviceData.name = form.value.userName
    this.serviceData.phone = form.value.phone
    this.serviceData.email = form.value.email
    this.serviceData.date = form.value.date
    this.serviceData.numberOfTickets = form.value.tickets
    this.serviceData.timing = form.value.select
    this.serviceData.price = parseInt(this.movieData.price) * parseInt(form.value.tickets)
    this.dataService.updateUserDetails(this.serviceData, form.value.tickets)
    this.dataService.updateTicketDetails(this.movieData,upTick)
    this.router.navigate(['editSuccess'])
  }
}
