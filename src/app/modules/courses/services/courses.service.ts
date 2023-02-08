import { Inject, Injectable } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Author } from '@modules/courses/types/author';
import { ENDPOINT } from '@app/app.module';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient,
    @Inject(ENDPOINT) private url: String
  ) {
  }

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
    return this.http.get<Course[]>(this.url + 'courses', { params });
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.url +'courses', course);
  }

  getCourse(id: number | string): Observable<Course> {
    return this.http.get<Course>(this.url +`courses/${id}`);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(this.url +`courses/${course.id}`, course)
  }

  removeCourse(id: number): Observable<unknown> {
    return this.http.delete(this.url +`courses/${id}`);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url +'authors');
  }
}
