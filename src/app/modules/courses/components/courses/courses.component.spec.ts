import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { coursesMock } from '@app/testing/courses.mock';
import { By } from '@angular/platform-browser';
import { MockBreadcrumbsComponent } from '@app/testing/components/mock-breadcrumbs.component';
import { MockSearchComponent } from '@app/testing/components/mock-search.component';
import { MockCourseCardComponent } from '@app/testing/components/mock-course-card.component';
import { TestingModule } from '@app/testing/testing.module';
import { FilterPipe } from '@shared/pipes/filter/filter.pipe';
import { MockFilterPipe } from '@app/testing/pipes/mock-filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        MockBreadcrumbsComponent,
        MockSearchComponent,
        MockCourseCardComponent
      ],
      imports: [
        TestingModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: FilterPipe, useClass: MockFilterPipe
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render breadcrumbs, search, course-card components', function () {
    const searchElement = fixture.debugElement.query(
      By.directive(MockSearchComponent)
    );
    const courseCardElement = fixture.debugElement.query(
      By.directive(MockCourseCardComponent)
    );
    const search = searchElement.componentInstance;
    const course = courseCardElement.componentInstance;
    expect(search).toBeTruthy();
    expect(course).toBeTruthy();
  });

  it('should show 2 course cards', function () {
    const cards = el.querySelectorAll('app-course-card');
    expect(cards.length === 2);
  });

  it('should show search', function () {
    const search = el.querySelector('app-search');
    expect(search).toBeTruthy();
  });

  it('should track by id', function () {
    const id = component.trackByIdentity(0, coursesMock[0]);
    expect(id).toBe(1)
  });
});
