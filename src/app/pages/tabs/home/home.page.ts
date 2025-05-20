import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonButtons, IonMenuButton, IonList, IonThumbnail, IonItem } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/core/interfaces/game';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, TranslateModule, IonButtons, IonMenuButton, CommonModule, IonList, IonThumbnail, IonItem],
})
export class HomePage implements OnInit {
  /* Flag for recently added games' array */
  recentlyAddedGames: Game[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getRecentlyAddedGames().subscribe(
      (data) => {
        console.log(data);
        this.recentlyAddedGames = data;
      }
    );
  }
}