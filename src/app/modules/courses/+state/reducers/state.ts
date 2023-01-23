import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromCourses from './courses.reducer';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'shared-courses';

export interface State {
  coursesFeature: fromCourses.State
}

export const reducers: ActionReducerMap<State> = {
  coursesFeature: fromCourses.reducer
}

export const metaReducers: MetaReducer<State>[] = [];


@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })]
})
export class SharedCoursesModule {}

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
