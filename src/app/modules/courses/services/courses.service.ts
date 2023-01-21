import { Injectable } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Author } from '@modules/courses/types/author';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCourses(
    eachRowCount = 5,
    start = 0,
    textFragment?: string
  ): Observable<Course[]> {
    const params = new HttpParams()
      .set('start', start)
      .set('count', eachRowCount)
      .set('textFragment', textFragment || '')
      .set('sort', 'asc');
    return this.http.get<Course[]>('courses', { params });
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
