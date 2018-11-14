import { Injectable } from "@angular/core";
import { Iproduce } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable, from, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})



export class ProductService {
  private productUrl = 'http://127.0.0.1:8000/products/'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Iproduce[]> {
    return this.http.get<Iproduce[]>(this.productUrl).pipe(
      catchError(this.handleError)
    )
  }

  getProduct(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Iproduce>(this.productUrl+id, { headers: headers }).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }



  handleError(err: HttpErrorResponse) {
    let errorMessage: string = ''
    if (err instanceof ErrorEvent) {
      errorMessage = err.error.errorMessage;
    }
    else {
      errorMessage = err.message;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}