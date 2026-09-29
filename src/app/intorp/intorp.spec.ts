import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Intorp } from './intorp';

describe('Intorp', () => {
  let component: Intorp;
  let fixture: ComponentFixture<Intorp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intorp],
    }).compileComponents();

    fixture = TestBed.createComponent(Intorp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
