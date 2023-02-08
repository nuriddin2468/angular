import * as fromCourses from '@modules/courses/+state/reducers/courses.reducer';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'shared-courses';

export interface State {
  coursesFeature: fromCourses.State
}

export const reducers: ActionReducerMap<State> = {
  coursesFeature: fromCourses.reducer
}


@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers)]
})
export class SharedCoursesModule {}
