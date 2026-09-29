import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentp } from './contentp';

describe('Contentp', () => {
  let component: Contentp;
  let fixture: ComponentFixture<Contentp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentp],
    }).compileComponents();

    fixture = TestBed.createComponent(Contentp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
