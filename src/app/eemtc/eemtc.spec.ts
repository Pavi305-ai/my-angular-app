import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eemtc } from './eemtc';

describe('Eemtc', () => {
  let component: Eemtc;
  let fixture: ComponentFixture<Eemtc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eemtc],
    }).compileComponents();

    fixture = TestBed.createComponent(Eemtc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
