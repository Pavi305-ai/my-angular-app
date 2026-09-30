import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Outor } from './outor';

describe('Outor', () => {
  let component: Outor;
  let fixture: ComponentFixture<Outor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outor],
    }).compileComponents();

    fixture = TestBed.createComponent(Outor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
