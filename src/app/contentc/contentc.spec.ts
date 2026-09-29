import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentc } from './contentc';

describe('Contentc', () => {
  let component: Contentc;
  let fixture: ComponentFixture<Contentc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentc],
    }).compileComponents();

    fixture = TestBed.createComponent(Contentc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
