import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListViewComponent } from './views/article-list-view/article-list-view.component';
import { ArticleEditViewComponent} from './views/article-edit-view/article-edit-view.component';
import { ArticleFormCreateEditViewComponent } from './views/article-form-create-edit-view/article-form-create-edit-view.component';

const routes: Routes = [
  {path: 'news', component: ArticleListViewComponent},
  {path: 'news/create', component: ArticleFormCreateEditViewComponent},
  {path: 'news/:id', component: ArticleEditViewComponent},
  {path: 'news/edit/:id', component: ArticleFormCreateEditViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
