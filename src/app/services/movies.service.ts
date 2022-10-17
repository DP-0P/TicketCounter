import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { constant } from "../utilities/constant";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { movieData } from "../utilities/movieData";
import { userData } from "../utilities/userDetails";

@Injectable({
    providedIn: 'root'
})
export class MovieService{

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    
    private dataStream  = new BehaviorSubject(movieData)
    private userDataStream = new BehaviorSubject(userData)

    constructor(private httpClient: HttpClient){}

      getDataStream(){
        return this.dataStream.asObservable()
      }

      getUserDataStream(){
        return this.userDataStream.asObservable()
      }

      putData(data:any){
        this.dataStream.next(data)
      }

      getUserData(): Observable<any>{
        return this.httpClient.get(constant.userDetails.toString())
    }

    getUserDetail(id:number): Observable<any>{
      return this.httpClient.get(constant.userDetails.toString()+'/'+id)
  }
    
    getMovieData(id:number): Observable<any>{
        return this.httpClient.get(constant.getEndPoint.toString()+'/'+id)
    }

    getMovieDetails(): Observable<any>{
      return this.httpClient.get(constant.getEndPoint.toString())
  }

  updateUserDetails(userD:userData,movie:movieData){
    this.httpClient.put(constant.userDetails.toString()+'/'+userD.id,userD).subscribe()
  }
    
    updateTicketDetails(movie:movieData,tickets:any){
        
        movie.ticketsAvailable = movie.ticketsAvailable-tickets

        this.httpClient.put(constant.getEndPoint.toString()+'/'+movie.id,movie).subscribe()
    }

    addNewUser(user:userData){
      this.httpClient.post<any>(constant.userDetails.toString(), user).subscribe()
    }

    handleError(er:any){
        return throwError(()=>{
            console.log(er)
        })
    }
}