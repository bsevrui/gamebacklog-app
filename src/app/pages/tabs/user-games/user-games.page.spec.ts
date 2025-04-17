import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserGamesPage } from './user-games.page';

describe('UserGamesPage', () => {
  let component: UserGamesPage;
  let fixture: ComponentFixture<UserGamesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UserGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});