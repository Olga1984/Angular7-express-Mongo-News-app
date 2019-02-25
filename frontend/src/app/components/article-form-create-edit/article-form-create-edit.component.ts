import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitterService } from '../../services/event-emitter.service';
import { MyNewsApiService } from '../../services/my-news-api.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {News} from '../../models/news';

declare var M: any;

@Component({
  selector: 'app-article-create',
  templateUrl: './article-form-create-edit.component.html',
  styleUrls: ['./article-form-create-edit.component.scss']
})
export class ArticleFormCreateEditComponent implements OnInit {
  today: Date;
  pageName: string;
  articleId: any;
  article: News;

  urlSource = 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png';
  fileSource = 'file://news_bigger.png';

  fullArticle: string;
  submitted = false;
  success = false;

  title: FormControl = new FormControl('', [Validators.required]);
  description: FormControl = new FormControl('', []);
  content: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', []);
  author: FormControl = new FormControl('', []);
  publishedAt: FormControl = new FormControl('', []);
  urlToImage: FormControl = new FormControl('', []);
  url: FormControl = new FormControl('', []);

  articleForm: FormGroup = new FormGroup({
    title: this.title,
    description: this.description,
    content: this.content,
    image: this.image,
    author: this.author,
    publishedAt: this.publishedAt,
    urlToImage: this.urlToImage,
    url: this.url
  });

  constructor(private formBuilder: FormBuilder, private eventEmitterService: EventEmitterService, private myNewsApiService: MyNewsApiService, private router: Router, private route: ActivatedRoute) {}

  getCurrentDate() {
    this.today = new Date();
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }
  onSubmitArticle() {
    if (this.articleForm.valid) {
      if (this.articleId) {
        this.myNewsApiService.putArticle(this.articleForm.value, this.articleId).subscribe(
          // (response) => console.log(response),
          (error) => console.log(error)
        );
        M.toast({html: 'Updated!'});
      } else {
        this.myNewsApiService.postArticle(this.articleForm.value).subscribe(
          // (response) => console.log(response),
          (error) => console.log(error)
        );
        M.toast({html: 'Saved!'});
      }
      this.submitted = true;
      this.success = true;
    }
  }
  setImgSource(isUrl: boolean) {
    if (isUrl) {
      this.urlToImage.setValue(this.urlSource);
    } else {
      this.urlToImage.setValue(this.fileSource);
    }
  }

  reRouteToMainPage(url: string) {
    this.router.navigate([url]);
  }

  buildForm() {
    this.articleForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      content: this.content,
      author: this.author,
      publishedAt: this.publishedAt,
      urlToImage: this.urlToImage,
      url: this.url
    });
  }
  updateForm() {
     this.title.setValue(this.article.title);
     this.description.setValue(this.article.description);
     this.content.setValue(this.article.content);
     this.publishedAt.setValue(this.article.publishedAt);
     this.author.setValue(this.article.author);
     this.urlToImage.setValue(this.article.urlToImage);
     this.url.setValue(this.article.url);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.articleId = params.id;
    });
    if (this.articleId) {
      this.myNewsApiService.getArticle(this.articleId).subscribe(
        (response) => {
          this.article = response;
          this.updateForm();
        },
        (error) => console.log(error)
      );
    }
    this.buildForm();
    this.eventEmitterService.updatedTitleValue.subscribe((title: string) => {
      this.pageName = title;
    });
    this.articleForm.valueChanges.subscribe((data) => {
      this.fullArticle = `${data.title}${data.description}${data.content}${data.image}${data.date}${data.url}`;
      // console.log(this.fullArticle, 'this.fullArticle');
      // console.log(this.articleForm);
    });
  }
}
