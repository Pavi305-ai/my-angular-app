import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Innalp } from './innalp';

describe('Innalp', () => {
  let component: Innalp;
  let fixture: ComponentFixture<Innalp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Innalp],
    }).compileComponents();

    fixture = TestBed.createComponent(Innalp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
