import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { coursesMock } from '@app/testing/courses.mock';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = coursesMock[0];
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('check actions', () => {
    let editButton: HTMLElement;
    let deleteButton: HTMLElement;
    beforeEach(() => {
      spyOn(component.edit, 'emit');
      spyOn(component.delete, 'emit');
      const actionPanel = el.querySelector('.action');
      editButton = actionPanel.querySelectorAll('button')[0];
      deleteButton = actionPanel.querySelectorAll('button')[1];
    })
    it('should emit edit button', fakeAsync (() => {
      editButton.click();
      tick();
      expect(component.edit.emit).toHaveBeenCalled();
    }));
    it('should emit delete button', fakeAsync (() => {
      deleteButton.click();
      tick();
      expect(component.delete.emit).toHaveBeenCalled();
    }));
  })
});
