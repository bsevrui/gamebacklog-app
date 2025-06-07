import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { LocalizationService } from 'src/app/core/services/localization.service';
import { RouterLink, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/core/interfaces/user';
import { UsersGames } from 'src/app/core/interfaces/usersgames/usersgames';
import { addIcons } from 'ionicons';
import { create, trashSharp } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonIcon, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-usergames',
  templateUrl: 'user-games.page.html',
  styleUrls: ['user-games.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonListHeader, IonItem, IonThumbnail, IonLabel, RouterLink, CommonModule, IonItemOption, IonItemOptions, IonItemSliding, IonIcon, IonRefresher, IonRefresherContent],
})
export class UserGamesPage implements OnInit {
  /* Flaf for curent user data */
  private currentUser?: User;
  /* Flag for user games' array */
  private userGames?: UsersGames[];
  /* Flag for playing games' array */
  public playingGames?: UsersGames[];
  /* Flag for completed games' array */
  public completedGames?: UsersGames[];
  /* Flaf for played games' array */
  public playedGames?: UsersGames[];
  /* Flag for on hold games' arayy  */
  public onHoldGames?: UsersGames[];
  /* Flag for plan to play games' array  */
  public planToPlayGames?: UsersGames[];
  /* Flag for dropped games' array */
  public droppedGames?: UsersGames[];

  /**
   * Constructor
   * @param apiService API Service.
   * @param storageService Storage Service.
   * @param localizationService Localization Service.
   * @param router Router.
   * @param toastCtrl Toast Controller.
   */
  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private localizationService: LocalizationService,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    addIcons({ trashSharp, create });
  }

  async ngOnInit() {
    this.currentUser = await this.storageService.getUserData();
    this.loadData();
  }

  doRefresh(event: any) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  /**
   * Loads the user games on db
   */
  loadData() {
    if (this.currentUser) {
      this.apiService.getUser(this.currentUser.id).subscribe(
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

  /**
   * Go to update page
   * @param gameId the selected game id
   */
  goToUpdatePage(gameId: number) {
    this.router.navigate(['/tabs/userGames/update', this.currentUser?.id, gameId]);
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }

  delete(gamedId: number) {
    if (this.currentUser) {
      this.apiService.deleteUserGame(this.currentUser.id, gamedId).subscribe({
        next: (res) => {
          console.log('deleted: ', res);
          this.localizationService.translate(['TOAST_LOG_DELETED']).subscribe(async (values) => {
            this.router.navigate(['/tabs/userGames']).then(() => {
              window.location.reload();
            });
            await this.presentToast(values['TOAST_LOG_DELETED']);
          });
        },
        error: (err) => console.error('error: ', err)
      });
    }
  }
}