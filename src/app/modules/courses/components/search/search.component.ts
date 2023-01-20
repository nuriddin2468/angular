import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @Output() search = new EventEmitter<string>();

  subject$ = new Subject<string>();

  searchText: string;

  ngOnInit(): void {
    this.subject$.pipe(
      filter(res => res?.length >= 3),
      debounceTime(600)
    ).subscribe(res => this.search.emit(res));
  }

  submit(): void {
    this.subject$.next(this.searchText);
  }

}
