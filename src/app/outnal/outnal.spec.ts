import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Outnal } from './outnal';

describe('Outnal', () => {
  let component: Outnal;
  let fixture: ComponentFixture<Outnal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outnal],
    }).compileComponents();

    fixture = TestBed.createComponent(Outnal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
