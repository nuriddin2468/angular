import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddEditComponent } from './course-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '@modules/courses/services/courses.service';
import { MockCoursesComponent } from '@app/testing/components/mock-courses.component';

describe('CourseAddEditComponent', () => {
  let component: CourseAddEditComponent;
  let fixture: ComponentFixture<CourseAddEditComponent>;

  let coursesService: CoursesService;

  beforeEach(async () => {
    coursesService = jasmine.createSpyObj('CoursesService', ['getCourse', 'createCourse', 'updateCourse']);
    await TestBed.configureTestingModule({
      declarations: [ CourseAddEditComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'courses',
            component: MockCoursesComponent
          }
        ])
      ],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be new', function () {
    expect(component.isNew).toBeTruthy();
  });

  it('should save new one', function () {
    spyOn(component, 'saveNew');
    component.save();
    expect(component.saveNew).toHaveBeenCalled();
  });

  it('should update old one', function () {
    spyOn(component, 'saveExist');
    component.isNew = false;
    component.save();
    expect(component.saveExist).toHaveBeenCalled();
  });
});
