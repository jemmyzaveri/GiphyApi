import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  giphySearchUrl : string  = 'http://api.giphy.com/v1/gifs/search';

  apiKey: string = 'Fjkol12rzmY7dI49lcQKJL3z25XETKXr';
  
  constructor(private http: HttpClient) { }

  getSearchImageList(searchValue: string): Observable<any[]> {
    return this.http.get<any[]>(this.giphySearchUrl + '?q=' + searchValue + '&api_key=' + this.apiKey);
  }

  getOffsetImageList(searchValue: string,offset:number): Observable<any[]> {
    return this.http.get<any[]>(this.giphySearchUrl + '?q=' + searchValue + '&api_key=' + this.apiKey + '&offset=' + offset);
  }
}
