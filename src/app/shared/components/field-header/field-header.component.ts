import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-header',
  templateUrl: './field-header.component.html',
  styleUrls: ['./field-header.component.scss']
})
export class FieldHeaderComponent {
  @Input() text: string;
  @Input() isRequired: boolean;

}
