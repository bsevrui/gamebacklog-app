import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonRouterLink, IonThumbnail } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Game } from 'src/app/core/interfaces/game';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, TranslateModule, IonList, IonItem, IonLabel, IonRouterLink, IonThumbnail]
})
export class GamesPage implements OnInit {
  /* Flag for the games' array */
  games: Game[] = [];

  /**
   * Constructor
   * @param apiService    API Service
   */
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  /**
   * Loads games from db
   */
  loadData() {
    this.apiService.getGames().subscribe(
      (data) => {
        this.games = data;
      }
    );
  }
}