import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetarioComponent } from './monetario.component';

describe('MonetarioComponent', () => {
  let component: MonetarioComponent;
  let fixture: ComponentFixture<MonetarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MonetarioComponent]
    });
    fixture = TestBed.createComponent(MonetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
