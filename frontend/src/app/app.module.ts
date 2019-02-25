import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleFormCreateEditComponent } from './components/article-form-create-edit/article-form-create-edit.component';
import { NewsfilterPipe } from './pipes/newsfilter.pipe';
import { ArticleComponent } from './components/article/article.component';
import { MyNewsApiService } from './services/my-news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticleListComponent,
    ArticleContainerComponent,
    ArticleEditComponent,
    ArticleFormCreateEditComponent,
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
