import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: ['./duration-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationControlComponent),
    multi: true
  }]
})
export class DurationControlComponent implements ControlValueAccessor {

  set value(value) {
    this._value = Number(value);
  };

  get value(): number {
    return Number(this._value);
  }

  disabled: boolean;

  private _value: number;

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

  writeValue(value: number): void {
    this.value = Number(value);
  }

}
