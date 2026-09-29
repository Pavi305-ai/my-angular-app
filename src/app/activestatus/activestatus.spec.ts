import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Activestatus } from './activestatus';

describe('Activestatus', () => {
  let component: Activestatus;
  let fixture: ComponentFixture<Activestatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activestatus],
    }).compileComponents();

    fixture = TestBed.createComponent(Activestatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
