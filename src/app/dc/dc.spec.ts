import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dc } from './dc';

describe('Dc', () => {
  let component: Dc;
  let fixture: ComponentFixture<Dc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dc],
    }).compileComponents();

    fixture = TestBed.createComponent(Dc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
