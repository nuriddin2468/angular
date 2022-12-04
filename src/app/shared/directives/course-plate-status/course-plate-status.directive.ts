import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoursePlateStatus]'
})
export class CoursePlateStatusDirective implements OnInit {
  @Input() appCoursePlateStatus: Date | string;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    const currentStatusColor = this.getStatusColor();
    if(!currentStatusColor) return;
    (this.el.nativeElement as HTMLElement).style.borderColor = currentStatusColor;
  }

  private getStatusColor(): string | null {
    const today = new Date();
    const creationDateTime = new Date(this.appCoursePlateStatus).getTime();
    const currentDateTime = today.getTime();
    const dateOffset = (24*60*60*1000) * 14;
    if (creationDateTime < currentDateTime && creationDateTime >= (currentDateTime - dateOffset))
      return 'green';
    if (creationDateTime > currentDateTime)
      return 'blue';
    return null;
  }

}
