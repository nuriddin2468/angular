import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAuthenticated]'
})
export class IsAuthenticatedDirective implements OnInit{
  @Input() appIsAuthenticated: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    if (this.appIsAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
  }

}
