import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();

  searchText: string;

  submit(): void {
    this.search.emit(this.searchText);
  }

}
