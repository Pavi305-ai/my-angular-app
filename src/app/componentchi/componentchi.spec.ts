import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componentchi } from './componentchi';

describe('Componentchi', () => {
  let component: Componentchi;
  let fixture: ComponentFixture<Componentchi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentchi],
    }).compileComponents();

    fixture = TestBed.createComponent(Componentchi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
