import { Injectable } from "@angular/core";
import { Iproduce } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import {tap,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})



export class ProductService {
  private productUrl = 'http://127.0.0.1:8001/products/'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Iproduce[]> {
    return this.http.get<Iproduce[]>(this.productUrl).pipe(
      tap(data=>console.log('All: '+JSON.stringify(data))),
    )
  }
}