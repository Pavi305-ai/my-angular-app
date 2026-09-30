import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PBEB } from './pbeb';

describe('PBEB', () => {
  let component: PBEB;
  let fixture: ComponentFixture<PBEB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBEB],
    }).compileComponents();

    fixture = TestBed.createComponent(PBEB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
