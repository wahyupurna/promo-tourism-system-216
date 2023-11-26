import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDetailComponent } from './merchant-detail.component';

describe('MerchantDetailComponent', () => {
  let component: MerchantDetailComponent;
  let fixture: ComponentFixture<MerchantDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantDetailComponent]
    });
    fixture = TestBed.createComponent(MerchantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
