import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwbmonalC } from './twbmonal-c';

describe('TwbmonalC', () => {
  let component: TwbmonalC;
  let fixture: ComponentFixture<TwbmonalC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwbmonalC],
    }).compileComponents();

    fixture = TestBed.createComponent(TwbmonalC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
