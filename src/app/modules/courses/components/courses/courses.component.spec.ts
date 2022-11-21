import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { coursesMock } from '@shared/mocks/courses.mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    component.courses = [...coursesMock];
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 2 course cards', function () {
    const cards = el.querySelectorAll('app-course-card');
    expect(cards.length === 2);
  });

  it('should show breadcrumb and search', function () {
    const breadcrumb = el.querySelector('app-breadcrumbs');
    const search = el.querySelector('app-search');
    expect(breadcrumb).toBeTruthy();
    expect(search).toBeTruthy();
  });

  it('should track by id', function () {
    const id = component.trackByIdentity(0, coursesMock[0]);
    expect(id).toBe(1)
  });
});
