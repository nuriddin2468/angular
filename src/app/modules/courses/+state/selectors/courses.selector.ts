import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from '@modules/courses/+state/reducers/courses.reducer';
import { FEATURE_KEY, State } from '@modules/courses/+state/modules/shared-courses.module';

export const selectSharedCoursesState = createFeatureSelector<State>(FEATURE_KEY);

export const selectCoursesState = createSelector(
  selectSharedCoursesState,
  (state: State) => state.coursesFeature
);

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAllCourses
)

export const selectSelectedCourse = createSelector(
  selectCoursesState,
  fromCourses.selectSelectedCourse,
)

export const selectAuthors = createSelector(
  selectCoursesState,
  fromCourses.selectAuthors
)
