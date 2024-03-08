import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatusTagComponent } from './application-status-tag.component';

describe('ApplicationStatusTagComponent', () => {
  let component: ApplicationStatusTagComponent;
  let fixture: ComponentFixture<ApplicationStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationStatusTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
