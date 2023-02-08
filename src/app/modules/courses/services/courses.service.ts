import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Course } from '@modules/courses/types/course';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Author } from '@modules/courses/types/author';
import { ENDPOINT } from '@app/app.module';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private isServer: boolean;

  constructor(
    private http: HttpClient,
    @Inject(ENDPOINT) private url: String,
    private tState: TransferState,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isServer = isPlatformServer(platformId);
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
    const key = makeStateKey<Course>(`course${id}`);
    if (this.tState.hasKey(key)) return of(this.tState.get(key, {} as unknown as Course));
    return this.http.get<Course>(this.url +`courses/${id}`).pipe(
      tap(val => {
        if (this.isServer) this.tState.set(key, val);
      })
    );
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
