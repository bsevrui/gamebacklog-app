import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Game } from 'src/app/core/interfaces/game';
import { ApiService } from 'src/app/core/services/api.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usergames',
  templateUrl: 'user-games.page.html',
  styleUrls: ['user-games.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel, RouterLink, CommonModule],
})
export class UserGamesPage implements OnInit {
  /* Flag for current user playing games' array */
  playingGames: Game[] = [];
  /* Flag for current user completed games' array */
  completedGames: Game[] = [];
  /* Flag for current user played games' array */
  playedGames: Game[] = [];
  /* Flag for current user on-hold games' array */
  onHoldGames: Game[] = [];
  /* Flag for current user plan-to-play games' array */
  planToPlayGames: Game[] = [];
  /* Flag for current user dropped games' array */
  droppedGames: Game[] = [];

  /**
   * Constructor
   * @param apiService API Service.
   * @param storageService Storage Service.
   */
  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}
}