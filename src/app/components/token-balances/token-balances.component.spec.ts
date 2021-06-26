import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenBalancesComponent } from './token-balances.component';

describe('TokenBalancesComponent', () => {
  let component: TokenBalancesComponent;
  let fixture: ComponentFixture<TokenBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
