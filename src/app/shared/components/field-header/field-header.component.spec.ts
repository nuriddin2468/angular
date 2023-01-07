import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldHeaderComponent } from './field-header.component';

describe('FieldHeaderComponent', () => {
  let component: FieldHeaderComponent;
  let fixture: ComponentFixture<FieldHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
