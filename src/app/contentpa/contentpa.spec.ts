import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentpa } from './contentpa';

describe('Contentpa', () => {
  let component: Contentpa;
  let fixture: ComponentFixture<Contentpa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentpa],
    }).compileComponents();

    fixture = TestBed.createComponent(Contentpa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
