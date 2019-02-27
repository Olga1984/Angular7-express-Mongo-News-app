import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticlesViewComponent } from './my-articles-view.component';

describe('MyArticlesViewComponent', () => {
  let component: MyArticlesViewComponent;
  let fixture: ComponentFixture<MyArticlesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArticlesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArticlesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
