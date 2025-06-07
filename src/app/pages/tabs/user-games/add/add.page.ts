import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalizationService } from 'src/app/core/services/localization.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Game } from 'src/app/core/interfaces/game';
import { addIcons } from 'ionicons';
import { close, saveSharp } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonList, IonItem, IonSelect, IonSelectOption, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButtons, IonBackButton, IonButton, IonList, IonItem, IonSelect, IonSelectOption, IonIcon, RouterLink]
})
export class AddPage implements OnInit {
  private userId: number = 0;
  private gameId: number = 0;
  public game?: Game;
  public status: 'Playing' | 'Completed' | 'Played' | 'On-Hold' | 'Plan-To-Play' | 'Dropped' = 'Completed';
  public score?: number;
  public installed: boolean = false;
  public platinum: boolean = false;

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
    addIcons({ close, saveSharp });
  }

  ngOnInit() {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('userId'));
    this.gameId = Number(this.activatedRoute.snapshot.paramMap.get('gameId'));
    this.loadGameData();
  }

  loadGameData() {
    if (this.gameId) {
      this.apiService.getGame(this.gameId).subscribe(
        (data) => {
          this.game = data;
          console.log(this.game);
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

  createUserGame() {
    const relation = {
      userId: this.userId,
      gameId: this.gameId,
      status: this.status,
      score: this.score,
      installed: this.installed,
      platinum: this.platinum
    };

    this.apiService.createUserGame(relation).subscribe({
      next: (res) => {
        console.log('relation saved: ', res);
        this.localizationService.translate(['TOAST_LOG_CREATED']).subscribe(async (values) => {
          this.router.navigate(['/list/games/info', this.gameId]).then(() => {
            window.location.reload();
          });
          await this.presentToast(values['TOAST_LOG_CREATED']);
        });
      },
      error: (err) => {
        console.error('error: ', err)
      }
    });
  }
}