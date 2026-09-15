import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Databindingclass } from './databindingclass';

describe('Databindingclass', () => {
  let component: Databindingclass;
  let fixture: ComponentFixture<Databindingclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databindingclass],
    }).compileComponents();

    fixture = TestBed.createComponent(Databindingclass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
