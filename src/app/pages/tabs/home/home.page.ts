import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonButtons, IonMenuButton, IonList, IonThumbnail, IonItem, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/core/interfaces/game';
import { ApiService } from 'src/app/core/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, TranslateModule, IonButtons, IonMenuButton, CommonModule, IonList, IonThumbnail, IonItem, RouterLink, IonRefresher, IonRefresherContent],
})
export class HomePage implements OnInit {
  /* Flag for recently added games' array */
  recentlyAddedGames: Game[] = [];
  /* Flag for the top rated games' array */
  topRatedGames: Game[] = [];
  /* Flag for more popular games' array */
  mostPopularGames: Game[] = [];

  /**
   * Constructor
   * @param apiService API Service.
   */
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  doRefresh(event: any) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  loadData() {
    this.apiService.getRecentlyAddedGames().subscribe(
      (data) => this.recentlyAddedGames = data
    );
    this.apiService.getTopRatedGames().subscribe(
      (data) => this.topRatedGames = data
    );
    this.apiService.getMostPopular().subscribe(
      (data) => this.mostPopularGames = data
    );
  }
}