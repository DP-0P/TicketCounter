import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { constant } from "../utilities/constant";
import { catchError, Observable, retry, throwError } from "rxjs";
// import { movieData } from "../utilities/movieData";

@Injectable({
    providedIn: 'root'
})
export class MovieService{

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    

    constructor(private httpClient: HttpClient){}

    /*
    getMovieDetails(): Observable<any>{
        return this.httpClient.get<movieData[]>(constant.getEndPoint.toString()).pipe(retry(1),catchError(this.handleError));
        
    }
    */

    /*
    updateTicketDetails(id:number,ticketsAvailable:number):Observable<any>{

        const md = new movieData()
        md.ticketsAvailable = ticketsAvailable-5
        
        

        // console.log(md)
        
        // const header = new HttpHeaders()
        // header.set('Content-Type','application/json')
        console.log(constant.getEndPoint+'/'+id)
        // return this.httpClient.patch(constant.getEndPoint+'/'+id,md,this.httpOptions);
        return this.httpClient.put(`${constant.getEndPoint}/${id}`,JSON.stringify(md)).pipe(retry(1),catchError(this.handleError));
        // return this.httpClient.delete(`${constant.getEndPoint}/${id}`).pipe(retry(1),catchError(this.handleError));
    }
    */

    
    async updateTicketDetails(id:number,ticketsAvailable:number){ 
        const req = JSON.stringify({
            ticketsAvailable: ticketsAvailable-5
        })
        const response = await fetch(constant.getEndPoint + '/' + `${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: req
        })
    }
    

    handleError(er:any){
        return throwError(()=>{
            console.log(er)
        })
    }
}