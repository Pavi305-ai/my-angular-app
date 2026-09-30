import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PBV } from './pbv';

describe('PBV', () => {
  let component: PBV;
  let fixture: ComponentFixture<PBV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBV],
    }).compileComponents();

    fixture = TestBed.createComponent(PBV);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
