import { Injectable } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Author } from '@modules/courses/types/author';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses = new BehaviorSubject<Course[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<Course[]> {
    return this._courses.asObservable();
  }

  clearCourses(): void {
    this._courses.next([]);
  }

  fetchCourses(
    eachRowCount = 5,
    start = 0,
    textFragment = '',
    shouldSavePrev = true
  ): Observable<Course[]> {
    const params = new HttpParams()
      .set('start', start)
      .set('count', eachRowCount)
      .set('textFragment', textFragment);
    return this.http.get<Course[]>('courses', { params }).pipe(
      tap(res => {
        if (!shouldSavePrev) {
          this._courses.next(res);
          return;
        }
        this._courses.next([...this._courses.getValue(), ...res]);
      })
    );
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('courses', course);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`courses/${id}`);
  }

  updateCourse(courseId: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`courses/${courseId}`, course)
  }

  removeCourse(id: number): Observable<unknown> {
    return this.http.delete(`courses/${id}`);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('authors');
  }
}
