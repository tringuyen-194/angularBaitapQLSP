import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapQlspComponent } from './baitap-qlsp.component';

describe('BaitapQlspComponent', () => {
  let component: BaitapQlspComponent;
  let fixture: ComponentFixture<BaitapQlspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapQlspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapQlspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
