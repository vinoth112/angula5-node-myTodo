import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormComponent } from './material-form.component';

describe('EmployeeFormComponent', () => {
  let component: MaterialFormComponent;
  let fixture: ComponentFixture<MaterialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
