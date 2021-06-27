import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractInteractionComponent } from './contract-interaction.component';

describe('ContractInteractionComponent', () => {
  let component: ContractInteractionComponent;
  let fixture: ComponentFixture<ContractInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
