import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleEditComponent} from './components/article-edit/article-edit.component';
import { ArticleFormCreateEditComponent } from './components/article-form-create-edit/article-form-create-edit.component';

const routes: Routes = [
  {path: 'news', component: ArticleListComponent},
  {path: 'news/create', component: ArticleFormCreateEditComponent},
  {path: 'news/:id', component: ArticleEditComponent},
  {path: 'news/edit/:id', component: ArticleFormCreateEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
