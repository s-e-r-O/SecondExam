import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbUsersComponent } from './upb-users.component';

describe('UpbUsersComponent', () => {
  let component: UpbUsersComponent;
  let fixture: ComponentFixture<UpbUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpbUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpbUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
