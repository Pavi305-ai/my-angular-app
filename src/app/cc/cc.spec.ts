import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CC } from './cc';

describe('CC', () => {
  let component: CC;
  let fixture: ComponentFixture<CC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CC],
    }).compileComponents();

    fixture = TestBed.createComponent(CC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
