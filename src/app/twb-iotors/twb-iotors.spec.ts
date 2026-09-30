import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwbIOtors } from './twb-iotors';

describe('TwbIOtors', () => {
  let component: TwbIOtors;
  let fixture: ComponentFixture<TwbIOtors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwbIOtors],
    }).compileComponents();

    fixture = TestBed.createComponent(TwbIOtors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
