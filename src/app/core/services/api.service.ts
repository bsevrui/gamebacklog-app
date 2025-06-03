import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game';
import { Platform } from '../interfaces/platform';
import { Genre } from '../interfaces/genre';
import { User } from '../interfaces/user';
import { UsersGamesUpdate } from '../interfaces/usersgamesupdate';
import { UsersGames } from '../interfaces/usersgames';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Games
   * @returns games on db
   */
  getGames(): Observable<Game []> {
    return this.http.get<Game []>(environment.apiBaseUrl+'games');
  }
  
  /**
   * Recently Added
   * @returns the 20 most recently added games on db
   */
  getRecentlyAddedGames(): Observable<Game []> {
    return this.http.get<Game []>(environment.apiBaseUrl+'games/recentlyadded');
  }

  /**
   * Top Rated
   * @returns the first 20 top rated games on db
   */
  getTopRatedGames(): Observable<Game []> {
    return this.http.get<Game []>(environment.apiBaseUrl+'games/toprated');
  }

  /**
   * Most Popular
   * @returns the 20 most popular games on db
   */
  getMostPopular(): Observable<Game []> {
    return this.http.get<Game []>(environment.apiBaseUrl+'games/mostpopular');
  }

  /**
   * Game
   * @param gameId game's id
   * @returns selected game's info on db
   */
  getGame(gameId: number): Observable<Game> {
    return this.http.get<Game>(environment.apiBaseUrl+'games/'+gameId);
  }

  /**
   * Platforms
   * @returns platforms on db
   */
  getPlatforms(): Observable<Platform []> {
    return this.http.get<Platform []>(environment.apiBaseUrl+'platforms');
  }

  /**
   * Platform
   * @param platformId platform's id
   * @returns selected platform's info on db
   */
  getPlatform(platformId: number): Observable<Platform> {
    return this.http.get<Platform>(environment.apiBaseUrl+'platforms/'+platformId);
  }
  
  /**
   * Genres
   * @returns genres on db
   */
  getGenres(): Observable<Genre []> {
    return this.http.get<Genre []>(environment.apiBaseUrl+'genres');
  }

  /**
   * Genre
   * @param genreId genre's id
   * @returns selected genre's info on db
   */
  getGenre(genreId: number): Observable<Genre> {
    return this.http.get<Genre>(environment.apiBaseUrl+'genres/'+genreId);
  }

  /**
   * Get User
   * @param userId user's id
   * @returns selected user's data on db
   */
  getUser(userId: number): Observable<User> {
    return this.http.get<User>(environment.apiBaseUrl+'users/'+userId);
  }

  /**
   * Updates user game relation
   * @param userId user's id
   * @param gameId game's id
   * @param usergame new data to be updated
   * @returns updated relation
   */
  updateUserGame(userId: number, gameId: number, usergame: UsersGamesUpdate) {
    return this.http.patch(environment.apiBaseUrl+'usersgames/'+userId+'/'+gameId, usergame);
  }

  /**
   * Get a specific relation between an user and a game
   * @param userId user's id
   * @param gameId game's id
   * @returns relation
   */
  getUserGame(userId: number, gameId: number) {
    return this.http.get<UsersGames>(environment.apiBaseUrl+'usersgames/'+userId+'/'+gameId);
  }

  /**
   * Delete user game relation
   * @param userId user's id
   * @param gameId game's id
   * @returns delete result
   */
  deleteUserGame(userId: number, gameId: number) {
    return this.http.delete(environment.apiBaseUrl+'usersgames/'+userId+'/'+gameId);
  }
}