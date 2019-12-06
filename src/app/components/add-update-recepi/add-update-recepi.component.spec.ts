import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateRecepiComponent } from './add-update-recepi.component';

describe('AddUpdateRecepiComponent', () => {
  let component: AddUpdateRecepiComponent;
  let fixture: ComponentFixture<AddUpdateRecepiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateRecepiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateRecepiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
