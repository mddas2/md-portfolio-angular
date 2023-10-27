import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppertitleComponent } from './uppertitle.component';

describe('UppertitleComponent', () => {
  let component: UppertitleComponent;
  let fixture: ComponentFixture<UppertitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppertitleComponent]
    });
    fixture = TestBed.createComponent(UppertitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
