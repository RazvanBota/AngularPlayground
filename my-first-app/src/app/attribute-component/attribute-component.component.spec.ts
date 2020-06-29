import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeComponentComponent } from './attribute-component.component';

describe('AttributeComponentComponent', () => {
  let component: AttributeComponentComponent;
  let fixture: ComponentFixture<AttributeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul have text', () => {
    const fixture = TestBed.createComponent(AttributeComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('This div is an attribute. I like more like this because can be tested with unit tests more beautiful.');
  });
});
