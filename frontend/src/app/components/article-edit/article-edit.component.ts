import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { MyNewsApiService } from '../../services/my-news-api.service';
import {EventEmitterService} from '../../services/event-emitter.service';
import {News} from '../../models/news';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  extended: boolean = true;
  articleId: any;
  article: News;
  constructor(private route: ActivatedRoute, private myNewsApiService: MyNewsApiService, private mainTitleService: EventEmitterService, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.articleId = params.id;
    });
    this.myNewsApiService.getArticle(this.articleId).subscribe(
      (response) => {
        this.article = response;
        //console.log(response);
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
  deleteArticleAndRerouteToMainPage() {
    this.myNewsApiService.deleteArticle(this.articleId).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    const url = `news`;
    this.router.navigate([url]);
  }
}
