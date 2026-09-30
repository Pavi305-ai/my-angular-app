import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwbIOtorsp } from './twb-iotorsp';

describe('TwbIOtorsp', () => {
  let component: TwbIOtorsp;
  let fixture: ComponentFixture<TwbIOtorsp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwbIOtorsp],
    }).compileComponents();

    fixture = TestBed.createComponent(TwbIOtorsp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
