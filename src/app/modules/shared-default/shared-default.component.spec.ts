import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDefaultComponent } from './shared-default.component';

describe('SharedDefaultComponent', () => {
  let component: SharedDefaultComponent;
  let fixture: ComponentFixture<SharedDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDefaultComponent]
    });
    fixture = TestBed.createComponent(SharedDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
