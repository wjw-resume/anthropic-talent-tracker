import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationActionBarComponent } from './application-action-bar.component';

describe('ApplicationActionBarComponent', () => {
  let component: ApplicationActionBarComponent;
  let fixture: ComponentFixture<ApplicationActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationActionBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
