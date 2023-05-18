import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IproovAuthComponent } from './iproov-auth.component';

describe('IproovAuthComponent', () => {
  let component: IproovAuthComponent;
  let fixture: ComponentFixture<IproovAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IproovAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IproovAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
