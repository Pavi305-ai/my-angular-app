import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Intor } from './intor';

describe('Intor', () => {
  let component: Intor;
  let fixture: ComponentFixture<Intor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intor],
    }).compileComponents();

    fixture = TestBed.createComponent(Intor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
