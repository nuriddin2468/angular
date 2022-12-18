import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { TestingModule } from '@app/testing/testing.module';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ],
      imports: [TestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', function () {
    const el = fixture.nativeElement as HTMLElement;
    const contentElement = el.querySelector('.content');
    expect(contentElement).toBeTruthy();
    expect(contentElement.textContent.trim()).toBe('Courses');
  });
});
