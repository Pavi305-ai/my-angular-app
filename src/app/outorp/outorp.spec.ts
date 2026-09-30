import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Outorp } from './outorp';

describe('Outorp', () => {
  let component: Outorp;
  let fixture: ComponentFixture<Outorp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outorp],
    }).compileComponents();

    fixture = TestBed.createComponent(Outorp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
