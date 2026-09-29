import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componentpar } from './componentpar';

describe('Componentpar', () => {
  let component: Componentpar;
  let fixture: ComponentFixture<Componentpar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentpar],
    }).compileComponents();

    fixture = TestBed.createComponent(Componentpar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
