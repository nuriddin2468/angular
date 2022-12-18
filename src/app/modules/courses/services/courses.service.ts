import { Injectable } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { coursesMock } from '@app/testing/courses.mock';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses = new BehaviorSubject<Course[]>([...coursesMock]);

  constructor() { }

  getCourses(): Observable<Course[]> {
    return this._courses.asObservable();
  }

  createCourse(course: Omit<Course, 'id'>): void {
    const courses = this._courses.getValue();
    courses.sort(item => item.id);
    const highestIndex = Math.max(...courses.map(item => item.id));
    course['id'] = highestIndex + 1;
    course['creationDate'] = new Date().toString();
    this._courses.next([...courses, course as Course]);
  }

  getCourse(id: number): Observable<Course> {
    return this._courses.pipe(map(res => res.find(item => item.id === id)))
  }

  updateCourse(course: Course): void {
    const courses = this._courses.getValue();
    const index = courses.findIndex(item => item.id === course.id);
    courses[index] = course;
    this._courses.next(courses);
  }

  removeCourse(id: number): void {
    const courses = this._courses.getValue();
    const newCourses = courses.filter(item => item.id !== id);
    this._courses.next(newCourses);
  }
}
