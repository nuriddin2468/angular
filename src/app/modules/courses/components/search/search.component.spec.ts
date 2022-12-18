import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { TestingModule } from '@app/testing/testing.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TestingModule
      ],
      declarations: [SearchComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render input and button', function () {
    const input = searchElement.querySelector('input');
    const button = searchElement.querySelector('button');
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('should emit value on submit', fakeAsync(() => {
    spyOn(component.search, 'emit');
    const text = 'test search';
    const input = searchElement.querySelector('input');
    const button = searchElement.querySelector('button');
    input.value = text;
    input.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    button.click();
    tick();
    expect(component.search.emit).toHaveBeenCalledWith(text);
  }));
});
