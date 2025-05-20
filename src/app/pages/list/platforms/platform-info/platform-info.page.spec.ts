import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformInfoPage } from './platform-info.page';

describe('PlatformInfoPage', () => {
  let component: PlatformInfoPage;
  let fixture: ComponentFixture<PlatformInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});