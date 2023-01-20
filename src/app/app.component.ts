import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  loading$ = this.loadingService.getLoadingState().pipe(distinctUntilChanged())
  constructor(
    private loadingService: LoadingService
  ) {}
}
