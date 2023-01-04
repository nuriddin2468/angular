import { CoursePlateStatusDirective } from './course-plate-status.directive';
import { Component} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'mock-component',
  template: `
    <div
      id="creationDateBlackDefault"
      style="border: 1px solid black"
      [appCoursePlateStatus]="creationDateBlackDefault"
    >Some text</div>
    <div
      id="creationDateBlack"
      style="border: 1px solid black"
      [appCoursePlateStatus]="creationDateBlack"
    >Some text</div>
    <div
      id="creationDateGreen"
      style="border: 1px solid black"
      [appCoursePlateStatus]="creationDateGreen"
    >Some text</div>
    <div
      id="creationDateGreen14Days"
      style="border: 1px solid black"
      [appCoursePlateStatus]="creationDateGreen14Days"
    >Some text</div>
    <div
      id="creationDateBlue"
      style="border: 1px solid black"
      [appCoursePlateStatus]="creationDateBlue"
    >Some text</div>
  `,
})
class HostComponent {
  day = 24*60*60*1000;
  creationDateBlackDefault: Date;
  creationDateBlack = new Date(new Date().getTime() -  this.day * 20);
  creationDateGreen = new Date(new Date().getTime() -  this.day);
  creationDateGreen14Days = new Date(new Date().getTime() -  this.day * 13);
  creationDateBlue = new Date(new Date().getTime() +  this.day);
}
describe('CoursePlateStatusDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let block: HTMLElement;
  let component: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        HostComponent,
        CoursePlateStatusDirective
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    block = fixture.debugElement.nativeElement;
  })

  it('should init', function () {
    expect(block).toBeTruthy();
  });

  it('should be black by default', function () {
    expect(getBorderColorById('creationDateBlackDefault', block)).toBe('black');
  });

  it('should be black if post is old', function () {
    expect(getBorderColorById('creationDateBlack', block)).toBe('black');
  });

  it('should be green if post is new', function () {
    expect(getBorderColorById('creationDateGreen', block)).toBe('green');
  });

  it('should be green if post is +- 14 days new', function () {
    expect(getBorderColorById('creationDateGreen14Days', block)).toBe('green');
  });

  it('should be blue if post is not released', function () {
    expect(getBorderColorById('creationDateBlue', block)).toBe('blue');
  });
});

function getBorderColorById(id: string, nativeElement: HTMLElement): string {
  const el = nativeElement.querySelector(`#${id}`) as HTMLElement;
  return el.style.borderColor;
}
