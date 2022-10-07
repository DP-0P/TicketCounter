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

    handleError(er:any){
        return throwError(()=>{
            console.log(er)
        })
    }

}