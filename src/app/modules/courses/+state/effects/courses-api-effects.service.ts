import { Injectable } from '@angular/core';
import { CoursesService } from '@modules/courses/services/courses.service';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { CoursesActions, CoursesApiActions, CoursesSelectors } from '@modules/courses/+state';
import { catchError, concatMap, exhaustMap, forkJoin, map, mergeMap, of, switchMap, tap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CoursesApiEffectsService {

  private errorMessage = '';

  constructor(
    private coursesService: CoursesService,
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
    this.translateService.get('PAGES.COURSES_ADD_EDIT.ERROR').subscribe(res => {
      this.errorMessage = res;
    })
  }

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.enterToCoursesPage),
      exhaustMap(() => {
        return this.coursesService.fetchCourses().pipe(
          map(courses => CoursesApiActions.coursesLoaded({ courses }))
        );
      })
    );
  });

  loadMoreCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadMoreCourses),
      concatLatestFrom(() => this.store.select(CoursesSelectors.selectAllCourses)),
      concatMap(([action, courses]) => {
        return this.coursesService.fetchCourses(5, courses.length).pipe(
          map(courses => CoursesApiActions.coursesLoadedMore({ courses }))
        );
      }),
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.deleteCourse),
      mergeMap(({ course }) => {
        return this.coursesService.removeCourse(course.id).pipe(
          map(() => CoursesApiActions.courseDeleted({ course }))
        );
      })
    );
  });

  searchCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.searchCourses),
      switchMap(({ searchText }) => {
        return this.coursesService.fetchCourses(5, 0, searchText)
          .pipe(map((courses) => CoursesApiActions.coursesSearched({ courses })));
      })
    );
  });

  enterToAddEditCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.enterToAddEditCoursePage),
      switchMap(({ courseId }) => forkJoin([
        this.coursesService.getAuthors(),
        courseId ? this.coursesService.getCourse(courseId) : of(null)
      ]).pipe(map(([authors, course]) =>
        CoursesApiActions.enteredToAddEditCourses({ authors, course })
      ))),
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.createCourse),
      mergeMap(({ course }) => {
        return this.coursesService.createCourse(course);
      }),
      tap(() => this.router.navigate(['/courses'])),
      catchError(err => {
        this.snackBar.open(this.errorMessage, 'dismiss', {
          duration: 2000
        });
        return throwError(err);
      })
    );
  }, { dispatch: false });

  updateCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.updateCourse),
      mergeMap(({ course }) => {
        return this.coursesService.updateCourse(course);
      }),
      tap(() => this.router.navigate(['/courses'])),
      catchError(err => {
        this.snackBar.open(this.errorMessage, 'dismiss', {
          duration: 2000
        });
        return throwError(err);
      })
    );
  }, { dispatch: false });
}
