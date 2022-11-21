import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { coursesMock } from '@shared/mocks/courses.mock';

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
    component.course = {...coursesMock[0]};
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle actions', fakeAsync (() => {
    spyOn(component.edit, 'emit');
    spyOn(component.delete, 'emit');
    const actionPanel = el.querySelector('.action');
    const buttons = actionPanel.querySelectorAll('button');
    buttons.forEach(btn => btn.click());
    tick();
    expect(component.edit.emit).toHaveBeenCalled();
    expect(component.delete.emit).toHaveBeenCalled();
  }));
});
