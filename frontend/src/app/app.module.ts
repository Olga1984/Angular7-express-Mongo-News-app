import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ArticleListViewComponent } from './views/article-list-view/article-list-view.component';
import { MyArticlesViewComponent } from './views/my-articles-view/my-articles-view.component';
import { ArticleEditViewComponent } from './views/article-edit-view/article-edit-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleFormCreateEditViewComponent } from './views/article-form-create-edit-view/article-form-create-edit-view.component';
import { NewsfilterPipe } from './pipes/newsfilter.pipe';
import { ArticleComponent } from './components/article/article.component';
import { MyNewsApiService } from './services/my-news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticleListViewComponent,
    MyArticlesViewComponent,
    ArticleEditViewComponent,
    ArticleFormCreateEditViewComponent,
    NewsfilterPipe,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MyNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
