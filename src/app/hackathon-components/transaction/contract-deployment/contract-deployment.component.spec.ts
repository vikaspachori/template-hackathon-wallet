import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDeploymentComponent } from './contract-deployment.component';

describe('ContractDeploymentComponent', () => {
  let component: ContractDeploymentComponent;
  let fixture: ComponentFixture<ContractDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
