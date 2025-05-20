import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenreInfoPage } from './genre-info.page';

describe('GenreInfoPage', () => {
  let component: GenreInfoPage;
  let fixture: ComponentFixture<GenreInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});