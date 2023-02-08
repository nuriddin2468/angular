import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';
import { distinctUntilChanged } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  loading$ = this.loadingService.getLoadingState().pipe(distinctUntilChanged())
  constructor(
    private loadingService: LoadingService,
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
