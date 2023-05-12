import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatContainerComponent } from './float-container.component';

describe('FloatContainerComponent', () => {
  let component: FloatContainerComponent;
  let fixture: ComponentFixture<FloatContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
