import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwbmonalP } from './twbmonal-p';

describe('TwbmonalP', () => {
  let component: TwbmonalP;
  let fixture: ComponentFixture<TwbmonalP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwbmonalP],
    }).compileComponents();

    fixture = TestBed.createComponent(TwbmonalP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
