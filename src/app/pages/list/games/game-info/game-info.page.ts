import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel, IonImg, IonIcon, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Game } from 'src/app/core/interfaces/game';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { User } from 'src/app/core/interfaces/user';
import { UsersGames } from 'src/app/core/interfaces/usersgames';
import { addIcons } from 'ionicons';
import { cloudDownloadOutline, trophyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.page.html',
  styleUrls: ['./game-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel, IonImg, TranslateModule, RouterLink, IonIcon, IonButton]
})
export class GameInfoPage implements OnInit {
  private gameId: number = 0;
  public game?: Game;
  public authenticated?: boolean;
  public usergame?: UsersGames;

  /**
   * Constructaor
   * @param activatedRoute Activated Route.
   * @param apiService API Service.
   * @param storageService Storage Service.
   * @param router Router.
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router
  ) {
    addIcons({ cloudDownloadOutline, trophyOutline });
  }

  async ngOnInit() {
    this.gameId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.authenticated = await this.storageService.isAuthenticated();
    console.log(this.authenticated);
    this.loadGameData();
    if (this.authenticated) {
      this.getRelationWithCurrentUser();
    }
  }

  loadGameData() {
    if (this.gameId) {
      this.apiService.getGame(this.gameId).subscribe(
        (data) => {
          this.game = data;
          console.log(this.game);
        }
      );
    } else {
      console.error('gameId not loaded');
    }
  }

  async getRelationWithCurrentUser() {
    let currentUser: User = await this.storageService.getUserData();
    if (currentUser) {
      this.apiService.getUserGame(currentUser.id, this.gameId).subscribe(
        (data) => {
          this.usergame = data;
          console.log(this.usergame);
        }
      );
    } else {
      console.log('no user data can be retrieved, maybe there is no one logged');
    }
  }

  async goToAddPage(gameId: number) {
    let currentUser: User = await this.storageService.getUserData();
    if (currentUser) {
      this.router.navigate(['/tabs/userGames/add', currentUser.id, gameId]);
    }
  }

  async goToUpdatePage(gameId: number) {
    let currentUser: User = await this.storageService.getUserData();
    if (currentUser) {
      this.router.navigate(['/tabs/userGames/update', currentUser.id, gameId]);
    } else {
      console.error('could not load current user');
    }
  }

  async delete(gameId: number) {
    let curretUser: User = await this.storageService.getUserData();
    if (curretUser) {
      this.apiService.deleteUserGame(curretUser.id, gameId).subscribe({
        next: (res) => {
          console.log('deleted: ', res);
          this.router.navigate(['/tabs/userGames']).then(() => {
            window.location.reload();
          });
        },
        error: (err) => console.error('error: ', err)
      });
    }
  }
}