import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgstyleComponenta } from './ngstyle-componenta';

describe('NgstyleComponenta', () => {
  let component: NgstyleComponenta;
  let fixture: ComponentFixture<NgstyleComponenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgstyleComponenta],
    }).compileComponents();

    fixture = TestBed.createComponent(NgstyleComponenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
