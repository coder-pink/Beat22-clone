import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsDropdownComponent } from './beats-dropdown.component';

describe('BeatsDropdownComponent', () => {
  let component: BeatsDropdownComponent;
  let fixture: ComponentFixture<BeatsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatsDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
