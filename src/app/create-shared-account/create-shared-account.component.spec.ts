import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSharedAccountComponent } from './create-shared-account.component';

describe('CreateSharedAccountComponent', () => {
  let component: CreateSharedAccountComponent;
  let fixture: ComponentFixture<CreateSharedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSharedAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSharedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
