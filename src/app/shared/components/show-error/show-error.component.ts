import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowErrorComponent implements OnChanges, OnDestroy {
  @Input() control: AbstractControl | null = null;
  @Input() showError = true;
  @Input() name: string;

  private statusChangesSubscription: Subscription;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const control: AbstractControl = changes['control'].currentValue;
    if (!changes['control'].currentValue) return;
    if (!!this.statusChangesSubscription) this.statusChangesSubscription.unsubscribe();
    this.statusChangesSubscription = control.statusChanges.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.statusChangesSubscription?.unsubscribe();
  }

}
