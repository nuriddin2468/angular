import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteControlComponent),
    multi: true
  }]
})
export class AutocompleteControlComponent<T> implements ControlValueAccessor {

  @Input() data: T[];
  @Input() showName: keyof T;

  value: T[] = [];
  inputText: string;
  hints: T[];

  disabled: boolean;

  private onTouched!: Function;
  private onChanged!: Function;

  generateHints(str: string) {
    if (str.length === 0) {
      this.hints = [];
      return;
    }
    this.hints = this.data
      .filter(item => !this.value.find(x => x === item))
      .filter(item => (item[this.showName] as unknown as string).toLowerCase().search(str.toLowerCase()) !== -1);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: T[]): void {
    this.value = value;
  }

  chooseItem(hint: T) {
    this.value.push(hint);
    this.inputText = '';
    this.hints = [];
    this.onChanged(this.value);
  }

  removeItem(item: T) {
    this.value = this.value.filter(x => x !== item);
    this.onChanged(this.value);
  }
}
