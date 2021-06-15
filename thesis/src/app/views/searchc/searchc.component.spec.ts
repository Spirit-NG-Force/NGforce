import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcComponent } from './searchc.component';

describe('SearchcComponent', () => {
  let component: SearchcComponent;
  let fixture: ComponentFixture<SearchcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
