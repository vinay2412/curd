import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

 public api_url = 'https://jsonplaceholder.typicode.com';

  constructor(public httpClient: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.api_url + '/posts/');
  }

  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(
      this.api_url + '/posts/',
      JSON.stringify(post));
  }

  find(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.api_url + '/posts/' + id);
  }

  update(id:number, post:Post): Observable<Post> {
    return this.httpClient.put<Post>(
      this.api_url + '/posts/' + id,
      JSON.stringify(post)).pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete<Post>(
      this.api_url + '/posts/' + id);
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
