import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {News} from '../../models/news';
import { Router } from '@angular/router';
import {MyNewsApiService} from "../../services/my-news-api.service";
import {EventEmitterService} from "../../services/event-emitter.service";

@Component({
  selector: 'app-article-container',
  templateUrl: './my-articles-view.component.html',
  styleUrls: ['./my-articles-view.component.scss']
})
export class MyArticlesViewComponent implements OnInit {
  @Input() article: News;
  @Input() isMynews: boolean;
  extended: boolean = false;

  newsArticle: News;
  articles: News[];

  constructor(private myNewsApiService: MyNewsApiService, private mainTitleService: EventEmitterService, private router: Router) { }

  ngOnInit() {
    this.newsArticle = this.article;
  }
  onGetMyNews() {
    this.myNewsApiService.getNews().subscribe(
      (articles: News[]) => {
        this.articles = articles;
        this.myNewsApiService.updatedArticles.emit(this.articles);
      },
      (error) => console.log(error)
    );
  }
  reRouteToEditForm(id: string, IsEditPage: boolean) {
    if (IsEditPage) {
      this.mainTitleService.updatedTitleValue.emit('edit');
    }
    const url = `news/edit/${id}`;
    this.router.navigate([url]);
  }
  deleteArticle(id: string) {
    this.myNewsApiService.deleteArticle(id).subscribe(
      (response) =>{
        console.log(response);
        this.onGetMyNews();
      },
      (error) => console.log(error)
    );
  }
}
