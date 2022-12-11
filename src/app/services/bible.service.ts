import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

interface Data {
  data: Book[]
}

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  apiKey = '15df2bed7f77df9f0039672e612298e5';
  url = `https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/books`;

  headers = {'api-key': this.apiKey };

  constructor(private http: HttpClient) { }

  allBooks(): Observable<Book[]> {
    return this.http.get<Data>(this.url, { headers: this.headers }).pipe(
      map( response =>  response.data )
    )
  }

  oneBook(id:string){
    return this.http.get(`${this.url}/${id}/chapters`, { headers: this.headers });
  }



}
