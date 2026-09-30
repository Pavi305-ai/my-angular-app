import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Outnalp } from './outnalp';

describe('Outnalp', () => {
  let component: Outnalp;
  let fixture: ComponentFixture<Outnalp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outnalp],
    }).compileComponents();

    fixture = TestBed.createComponent(Outnalp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
