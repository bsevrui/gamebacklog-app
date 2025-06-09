import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalizationService } from 'src/app/core/services/localization.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsersGames } from 'src/app/core/interfaces/usersgames/usersgames';
import { addIcons } from 'ionicons';
import { saveSharp, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, IonSelect, IonSelectOption, TranslateModule, IonButton, IonIcon, RouterLink]
})
export class UpdatePage implements OnInit {
  private userId?: number;
  private gameId?: number;
  public usergame?: UsersGames;
  public status?: 'Playing' | 'Completed' | 'Played' | 'On-Hold' | 'Plan-To-Play' | 'Dropped';
  public score?: number;
  public installed?: boolean;
  public platinum?: boolean;

  /**
   * Constructor
   * @param apiService API Service.
   * @param localizationService Localization Service.
   * @param activatedRoute Activated Route.
   * @param toastCtrl Toast Controller.
   * @param router Router.
   */
  constructor(
    private apiService: ApiService,
    private localizationService: LocalizationService,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    addIcons({ saveSharp, close });
  }

  ngOnInit() {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('userId'));
    this.gameId = Number(this.activatedRoute.snapshot.paramMap.get('gameId'));
    this.loadData();
  }

  loadData() {
    if (this.userId) {
      this.apiService.getUser(this.userId).subscribe(
        (data) => {
          if (this.gameId) {
            this.usergame = data.games?.find(usergame => usergame.gameId == this.gameId);
          }
        }
      );
    }
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

  update() {
    if (this.userId && this.gameId) {
      this.apiService.updateUserGame(this.userId, this.gameId, {
        status: this.status,
        score: this.score,
        installed: this.installed,
        platinum: this.platinum
      }).subscribe({
        next: (res) => {
          this.localizationService.translate(['TOAST_LOG_UPDATED']).subscribe(async (values) => {
            this.router.navigate(['/tabs/userGames']).then(() => {
              window.location.reload();
            });
            await this.presentToast(values['TOAST_LOG_UPDATED']);
          });
        },
        error: (err) => console.error('error: ', err)
      });
    }
  }
}