import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDate } from '@shared/utils/utils';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateControlComponent),
    multi: true
  }]
})
export class DateControlComponent implements ControlValueAccessor {

  value: Date;
  disabled: boolean;

  private onTouched!: Function;
  private onChanged!: Function;

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string | Date): void {
    if (isDate(value)) {
      this.value = value as Date;
      return;
    }
    const date = Date.parse(value as string);
    if (!isNaN(date)) this.value = new Date(date);
  }

  setDate(value: string) {
    this.value = new Date(value);
    this.onChanged(this.value);
  }
}
