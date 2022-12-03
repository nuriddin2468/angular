import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { coursesMock } from '@app/testing/courses.mock';
import { By } from '@angular/platform-browser';
import { MockBreadcrumbsComponent } from '@app/testing/components/mock-breadcrumbs.component';
import { MockSearchComponent } from '@app/testing/components/mock-search.component';
import { MockCourseCardComponent } from '@app/testing/components/mock-course-card.component';
import { TestingModule } from '@app/testing/testing.module';

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
      imports: [TestingModule]
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

  it('should render breadcrumbs, search, course-card components', function () {
    const breadcrumbElement = fixture.debugElement.query(
      By.directive(MockBreadcrumbsComponent)
    );
    const searchElement = fixture.debugElement.query(
      By.directive(MockSearchComponent)
    );
    const courseCardElement = fixture.debugElement.query(
      By.directive(MockCourseCardComponent)
    );
    const breadcrumb = breadcrumbElement.componentInstance;
    const search = searchElement.componentInstance;
    const course = courseCardElement.componentInstance;
    expect(breadcrumb).toBeTruthy();
    expect(search).toBeTruthy();
    expect(course).toBeTruthy();
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
