import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-header',
  templateUrl: './field-header.component.html',
  styleUrls: ['./field-header.component.scss']
})
export class FieldHeaderComponent implements OnInit {
  @Input() text: string;
  @Input() isRequired: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
