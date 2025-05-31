import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/core/interfaces/user';
import { UsersGames } from 'src/app/core/interfaces/usersgames';

@Component({
  selector: 'app-usergames',
  templateUrl: 'user-games.page.html',
  styleUrls: ['user-games.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel, RouterLink, CommonModule],
})
export class UserGamesPage implements OnInit {
  private currentUser?: User;
  private currentUserId: number = 0;
  private userGames?: UsersGames[];
  public playingGames?: UsersGames[];
  public completedGames?: UsersGames[];
  public playedGames?: UsersGames[];
  public onHoldGames?: UsersGames[];
  public planToPlayGames?: UsersGames[];
  public droppedGames?: UsersGames[];

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
          this.userGames = data.games;
          console.log(this.userGames);
          this.playingGames = this.userGames?.filter(usergame => usergame.status === 'Playing');
          this.completedGames = this.userGames?.filter(usergame => usergame.status === 'Completed');
          this.playedGames = this.userGames?.filter(usergame => usergame.status === 'Played');
          this.onHoldGames = this.userGames?.filter(usergame => usergame.status === 'On-Hold');
          this.planToPlayGames = this.userGames?.filter(usergame => usergame.status === 'Plan-To-Play');
          this.droppedGames = this.userGames?.filter(usergame => usergame.status === 'Dropped');
        }
      );
    } else {
      console.error("currentUserId value not loaded");
    }
  }
}