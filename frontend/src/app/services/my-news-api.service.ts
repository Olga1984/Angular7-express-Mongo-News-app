import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyNewsApiService {
  public updatedArticles: EventEmitter<News[]> = new EventEmitter();
  articles: News[];
  readonly URL_API = 'http://localhost:3000/api/news';

  constructor(private http: HttpClient) {
  }
  getNews(): Observable<News[]> {
    return this.http
      .get<News[]>(this.URL_API);
  }
  getArticle(id): Observable<News> {
    return this.http
      .get<News>(this.URL_API + `/${id}`)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  postArticle(article: News): Observable<News> {
    return this.http
      .post<News>(this.URL_API, article);
  }
  putArticle(article: News, id: any): Observable<News> {
    return this.http
      .put<News>(this.URL_API + `/${id}`, article);
  }
  deleteArticle(id): Observable<News> {
    return this.http
      .delete<News>(this.URL_API + `/${id}`);
  }
}
