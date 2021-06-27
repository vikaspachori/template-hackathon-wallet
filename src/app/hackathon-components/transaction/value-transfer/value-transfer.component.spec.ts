import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTransferComponent } from './value-transfer.component';

describe('ValueTransferComponent', () => {
  let component: ValueTransferComponent;
  let fixture: ComponentFixture<ValueTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
