import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { constant } from "../utilities/constant";
import { catchError, Observable, retry, throwError } from "rxjs";
import { movieData } from "../utilities/movieData";

@Injectable({
    providedIn: 'root'
})
export class MovieService{

    constructor(private httpClient: HttpClient){}

    getMovieDetails(): Observable<any>{
        return this.httpClient.get<movieData>(constant.getEndPoint.toString()).pipe(retry(1),catchError(this.handleError));
    }

    async updateTicketDetails(id:number,ticketsAvailable:number){
        // return this.httpClient.patch(`${constant.getEndPoint}/${id}`,data).pipe(retry(1),catchError(this.handleError));

        const req = JSON.stringify({
            ticketsAvailable: ticketsAvailable-11
        })

        // console.log(`${constant.getEndPoint}/${id}/ticketsAvailable`)
        // return this.httpClient.put(`${constant.getEndPoint}/${id}`,{
        //     body:req
        // })

        const response = await fetch(constant.getEndPoint+'/'+`${id}`,{
            method:'PUT',

            headers:{
                'Content-Type':'application/json'
            },
            body: req
        })
        return await response.json()
    }

    // updateTicketDetails(id:number){
    //     this.getMovieDetails.name
    // }

    handleError(er:any){
        return throwError(()=>{
            console.log(er)
        })
    }

}