import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpossibleComponent } from './impossible.component';

describe('ImpossibleComponent', () => {
  let component: ImpossibleComponent;
  let fixture: ComponentFixture<ImpossibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpossibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
