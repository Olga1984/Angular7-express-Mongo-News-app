import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {
  @Input() article: News;
  @Input() isMynews: boolean;
  extended: boolean = false;

  newsArticle: News;


  constructor(private router: Router) { }

  ngOnInit() {
    this.newsArticle = this.article;
  }
  reRoute(id) {
    const url = `news/${id}`
    this.router.navigate([url]);
  }
}
