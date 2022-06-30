import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnavBarComponent } from './empnav-bar.component';

describe('EmpnavBarComponent', () => {
  let component: EmpnavBarComponent;
  let fixture: ComponentFixture<EmpnavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpnavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
