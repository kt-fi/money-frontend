import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCardSmComponent } from './transaction-card-sm.component';

describe('TransactionCardSmComponent', () => {
  let component: TransactionCardSmComponent;
  let fixture: ComponentFixture<TransactionCardSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCardSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
