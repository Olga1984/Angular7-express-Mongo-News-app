import {Component, OnChanges, OnInit} from '@angular/core';
import { WorldNewsApiService } from '../../services/world-news-api.service';
import { News } from '../../models/news';
import { MyNewsApiService } from '../../services/my-news-api.service';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'app-article-list-view',
  templateUrl: './article-list-view.component.html',
  styleUrls: ['./article-list-view.component.scss']
})

export class ArticleListViewComponent implements OnInit, OnChanges  {

  chanels: string[] = [
    'cnn',
    'bbc-news',
    'daily-mail',
    'business-insider',
    'mtv-news',
    'hacker-news',
    'the-guardian-uk',
    'google-news',
    'Bad Request!'];

  articles: News[];
  isMynews = false;

  articlesCount = 4;

  sourceChanel: string;
  searchWord: string;

  constructor(private apiService: WorldNewsApiService,
              private myNewsApiService: MyNewsApiService,
              private mainTitleService: EventEmitterService,
              private router: Router) {}

  ngOnInit() {
    if (!this.isMynews) {
    this.onGetWorldNews(this.chanels[0]);
    } else {
      this.onGetMyNews();

    }
    this.myNewsApiService.updatedArticles.subscribe((articles: News[]) => {
      this.articles = articles.slice(0, this.articlesCount);
    });
  }

  ngOnChanges() {
  }
  searchFilter(word: string) {
    this.searchWord = word;
  }
  reRouteToCreatePage() {
    this.mainTitleService.updatedTitleValue.emit('create');
    const url = 'news/create';
    this.router.navigate([url]);
  }

  onGetWorldNews(chanel: string) {
    this.mainTitleService.updatedTitleValue.emit(chanel);

    if (this.sourceChanel === chanel) {
      this.apiService.getWorldNews(chanel).subscribe(
        (articles: News[]) => {
          this.articles = articles.slice(0, this.articlesCount);
        },
        (error) => console.log(error)
      );
    } else {
      this.sourceChanel = chanel;

      this.apiService.getWorldNews(chanel).subscribe(
        (articles: News[]) => {
          this.articlesCount = 4;
          this.articles = articles.slice(0, this.articlesCount);
        },
        (error) => console.log(error)
      );
    }
  }
  onGetMyNews() {
    this.myNewsApiService.getNews().subscribe(
      (articles: News[]) => {
        this.articles = articles.slice(0, this.articlesCount);
        this.myNewsApiService.updatedArticles.emit(this.articles);
      },
      (error) => console.log(error)
    );
  }

  onFilterChange(eve: any) {
    this.isMynews = !this.isMynews;
    if (this.isMynews) {
      this.mainTitleService.updatedTitleValue.emit('my chanel');
      this.onGetMyNews();
      console.log('This is my news');
    } else {
      this.mainTitleService.updatedTitleValue.emit(this.sourceChanel);
      this.onGetWorldNews(this.sourceChanel);
    }
  }

  addArticles() {
    this.articlesCount += 4;
    if (!this.isMynews) {
      this.onGetWorldNews(this.sourceChanel);
    } else {
      this.onGetMyNews();
    }
  }
}
