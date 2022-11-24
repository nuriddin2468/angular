import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperComponent } from './wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockFooterComponent } from '@app/testing/components/mock-footer.component';
import { MockHeaderComponent } from '@app/testing/components/mock-header.component';

describe('WrapperComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        WrapperComponent,
        MockFooterComponent,
        MockHeaderComponent
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render Header and Footer', function () {
    const headerElement = fixture.debugElement.query(
      By.directive(MockHeaderComponent)
    );
    const footerElement = fixture.debugElement.query(
      By.directive(MockFooterComponent)
    );
    const header = headerElement.componentInstance;
    const footer = footerElement.componentInstance;
    expect(header).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
