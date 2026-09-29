import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentch } from './contentch';

describe('Contentch', () => {
  let component: Contentch;
  let fixture: ComponentFixture<Contentch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentch],
    }).compileComponents();

    fixture = TestBed.createComponent(Contentch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
