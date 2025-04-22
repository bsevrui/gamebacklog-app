import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformsPage } from './platforms.page';

describe('PlatformsPage', () => {
  let component: PlatformsPage;
  let fixture: ComponentFixture<PlatformsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});