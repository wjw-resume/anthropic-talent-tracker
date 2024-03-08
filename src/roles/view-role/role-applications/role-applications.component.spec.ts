import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleApplicationsComponent } from './role-applications.component';

describe('RoleApplicationsComponent', () => {
  let component: RoleApplicationsComponent;
  let fixture: ComponentFixture<RoleApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleApplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
