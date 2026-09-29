import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Viedynamic } from './viedynamic';

describe('Viedynamic', () => {
  let component: Viedynamic;
  let fixture: ComponentFixture<Viedynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viedynamic],
    }).compileComponents();

    fixture = TestBed.createComponent(Viedynamic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
