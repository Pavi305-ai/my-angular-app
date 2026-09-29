import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tempref } from './tempref';

describe('Tempref', () => {
  let component: Tempref;
  let fixture: ComponentFixture<Tempref>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tempref],
    }).compileComponents();

    fixture = TestBed.createComponent(Tempref);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
