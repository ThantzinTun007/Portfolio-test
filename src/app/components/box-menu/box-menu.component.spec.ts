import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMenuComponent } from './box-menu.component';

describe('BoxMenuComponent', () => {
  let component: BoxMenuComponent;
  let fixture: ComponentFixture<BoxMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
