import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InTKUP } from './in-tkup';

describe('InTKUP', () => {
  let component: InTKUP;
  let fixture: ComponentFixture<InTKUP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InTKUP],
    }).compileComponents();

    fixture = TestBed.createComponent(InTKUP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
