import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormCreateEditComponent } from './article-form-create-edit.component';

describe('ArticleFormCreateEditComponent', () => {
  let component: ArticleFormCreateEditComponent;
  let fixture: ComponentFixture<ArticleFormCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
