import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game';
import { Platform } from '../interfaces/platform';
import { Genre } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Games
   * @returns games on db
   */
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(environment.apiBaseUrl+'games');
  }
  
  /**
   * Platforms
   * @returns platforms on db
   */
  getPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(environment.apiBaseUrl+'platforms');
  }
  
  /**
   * Genres
   * @returns genres on db
   */
  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(environment.apiBaseUrl+'genres');
  }
}