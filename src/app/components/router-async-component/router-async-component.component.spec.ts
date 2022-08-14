import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAsyncComponentComponent } from './router-async-component.component';

describe('RouterAsyncComponentComponent', () => {
  let component: RouterAsyncComponentComponent;
  let fixture: ComponentFixture<RouterAsyncComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterAsyncComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
