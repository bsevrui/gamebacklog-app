import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Game } from 'src/app/core/interfaces/game';
import { ApiService } from 'src/app/core/services/api.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-usergames',
  templateUrl: 'user-games.page.html',
  styleUrls: ['user-games.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel, RouterLink, CommonModule],
})
export class UserGamesPage implements OnInit {
  currentUser?: User;
  currentUserId: number = 0;
  userGames: Game[] = [];

  /**
   * Constructor
   * @param apiService API Service.
   * @param storageService Storage Service.
   */
  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  async ngOnInit() {
    this.currentUser = await this.storageService.getUserData();
    this.loadData();
  }

  loadData() {
    if (this.currentUser) {
      this.currentUserId = this.currentUser.id;
      this.apiService.getUser(this.currentUserId).subscribe(
        (data) => {
          console.log(data);
        }
      );
    } else {
      console.error("currentUserId value not loaded");
    }
  }
}