import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {News} from '../../models/news';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: News;
  @Input() extended: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  reRoute(id) {
    if (!id) {
      return;
    } else {
      const url = `news/${id}`
      this.router.navigate([url]);
    }
  }

}
