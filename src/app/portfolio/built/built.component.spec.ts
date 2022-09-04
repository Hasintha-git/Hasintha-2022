import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltComponent } from './built.component';

describe('BuiltComponent', () => {
  let component: BuiltComponent;
  let fixture: ComponentFixture<BuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
