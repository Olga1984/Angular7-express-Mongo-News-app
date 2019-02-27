import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditViewComponent } from './article-edit-view.component';

describe('ArticleEditViewComponent', () => {
  let component: ArticleEditViewComponent;
  let fixture: ComponentFixture<ArticleEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
