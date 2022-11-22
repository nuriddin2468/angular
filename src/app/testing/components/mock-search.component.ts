import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: '',
  styles: [
  ]
})
export class MockSearchComponent{
  @Output() search = new EventEmitter<string>();
}
