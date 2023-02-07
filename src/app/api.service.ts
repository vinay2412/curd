import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  catchError, Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  errorHandler: string | undefined;

  api_url = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.api_url + '/posts/')
    .pipe(

    )
  }

  create(post: any): Observable<Post> {
    return this.httpClient.post<Post>(this.api_url + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(

    )
  }

  // find(id): Observable<Post> {
  //   return this.httpClient.get<Post>(this.api_url + '/posts/' + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // update(id, post): Observable<Post> {
  //   return this.httpClient.put<Post>(this.api_url + '/posts/' + id, JSON.stringify(post), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // delete(id){
  //   return this.httpClient.delete<Post>(this.api_url + '/posts/' + id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }


//   errorHandler(error) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       errorMessage = error.error.message;
//     } else {
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     return throwError(errorMessage);
//  }
}
