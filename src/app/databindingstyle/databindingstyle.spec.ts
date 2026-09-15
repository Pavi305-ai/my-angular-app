import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Databindingstyle } from './databindingstyle';

describe('Databindingstyle', () => {
  let component: Databindingstyle;
  let fixture: ComponentFixture<Databindingstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databindingstyle],
    }).compileComponents();

    fixture = TestBed.createComponent(Databindingstyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
