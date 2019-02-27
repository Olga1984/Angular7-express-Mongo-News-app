import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormCreateEditViewComponent } from './article-form-create-edit-view.component';

describe('ArticleFormCreateEditViewComponent', () => {
  let component: ArticleFormCreateEditViewComponent;
  let fixture: ComponentFixture<ArticleFormCreateEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormCreateEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormCreateEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
