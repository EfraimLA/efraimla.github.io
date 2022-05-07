import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footer: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    footer = fixture.nativeElement.querySelector('footer');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text in footer', () => {
    expect(footer.textContent).toContain('Made with ❤️ by efraimla')
  });
});
