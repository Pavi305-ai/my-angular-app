import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eemtp } from './eemtp';

describe('Eemtp', () => {
  let component: Eemtp;
  let fixture: ComponentFixture<Eemtp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eemtp],
    }).compileComponents();

    fixture = TestBed.createComponent(Eemtp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
