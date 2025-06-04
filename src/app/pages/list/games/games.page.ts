import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonThumbnail, IonSearchbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Game } from 'src/app/core/interfaces/game';
import { ApiService } from 'src/app/core/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, TranslateModule, IonList, IonItem, IonLabel, IonThumbnail, RouterLink, IonSearchbar]
})
export class GamesPage implements OnInit {
  /* Flag for the games' array */
  private games: Game[] = [];
  /* Flag for search query */
  public searchQuery: string = "";
  /* Flag for filtered games */
  public filteredGames: Game[] = [];

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
        this.filteredGames = data;
      }
    );
  }

  filterGames() {
    this.filteredGames = this.games.filter((game => game.title.toLowerCase().includes(this.searchQuery.toLowerCase())));
  }
}