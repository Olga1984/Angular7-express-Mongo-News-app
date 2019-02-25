import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {News} from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class WorldNewsApiService {

  constructor(private http: HttpClient) {
  }

  getWorldNews(channel) {
    return this.http.get<News[]>(`https://newsapi.org/v1/articles?source=${channel}&apiKey=8b0ecc14a33147d4ad63d53efee42cb8`) // 554109c975e14549b32eb8b2f41fe8f8
      .pipe(
        map((response: any) => {
          return response.articles;
        })
      );
  }
}
