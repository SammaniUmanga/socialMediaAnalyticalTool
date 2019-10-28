import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingVideoComponent } from './trending-video.component';

describe('TrendingVideoComponent', () => {
  let component: TrendingVideoComponent;
  let fixture: ComponentFixture<TrendingVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
