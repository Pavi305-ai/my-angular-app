import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EBC } from './ebc';

describe('EBC', () => {
  let component: EBC;
  let fixture: ComponentFixture<EBC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBC],
    }).compileComponents();

    fixture = TestBed.createComponent(EBC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
