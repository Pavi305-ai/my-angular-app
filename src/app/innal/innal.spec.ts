import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Innal } from './innal';

describe('Innal', () => {
  let component: Innal;
  let fixture: ComponentFixture<Innal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Innal],
    }).compileComponents();

    fixture = TestBed.createComponent(Innal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
