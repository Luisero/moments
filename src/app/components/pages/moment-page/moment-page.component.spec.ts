import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentPageComponent } from './moment-page.component';

describe('MomentPageComponent', () => {
  let component: MomentPageComponent;
  let fixture: ComponentFixture<MomentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentPageComponent]
    });
    fixture = TestBed.createComponent(MomentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
