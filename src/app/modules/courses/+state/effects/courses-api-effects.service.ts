import { Injectable } from '@angular/core';
import { CoursesService } from '@modules/courses/services/courses.service';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { CoursesActions, CoursesApiActions, CoursesSelectors } from '@modules/courses/+state';
import { concatMap, exhaustMap, forkJoin, map, mergeMap, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class CoursesApiEffectsService {

  constructor(
    private coursesService: CoursesService,
    private actions$: Actions,
    private store: Store
  ) {
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
      })
    );
  }, { dispatch: false });

  updateCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.updateCourse),
      mergeMap(({ course }) => {
        return this.coursesService.updateCourse(course);
      })
    );
  }, { dispatch: false });
}
