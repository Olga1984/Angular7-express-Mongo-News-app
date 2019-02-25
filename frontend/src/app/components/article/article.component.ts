import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../models/news';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: News;
  @Input() extended: boolean;


  constructor() { }

  ngOnInit() {
  }

}
