import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointmentComponent } from './createappointment.component';

describe('CreateAppointmentComponent', () => {
  let component: CreateAppointmentComponent;
  let fixture: ComponentFixture<CreateAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAppointmentComponent]
    });
    fixture = TestBed.createComponent(CreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
