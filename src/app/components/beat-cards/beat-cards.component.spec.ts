import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatCardsComponent } from './beat-cards.component';

describe('BeatCardsComponent', () => {
  let component: BeatCardsComponent;
  let fixture: ComponentFixture<BeatCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
