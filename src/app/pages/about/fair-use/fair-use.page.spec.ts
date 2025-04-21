import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FairUsePage } from './fair-use.page';

describe('FairUsePage', () => {
  let component: FairUsePage;
  let fixture: ComponentFixture<FairUsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FairUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});