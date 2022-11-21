import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.search.emit(this.searchText);
  }

}
