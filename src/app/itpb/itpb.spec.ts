import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ITPB } from './itpb';

describe('ITPB', () => {
  let component: ITPB;
  let fixture: ComponentFixture<ITPB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITPB],
    }).compileComponents();

    fixture = TestBed.createComponent(ITPB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
