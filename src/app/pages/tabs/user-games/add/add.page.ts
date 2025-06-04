import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonList, IonItem, IonSelect, IonSelectOption, IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Game } from 'src/app/core/interfaces/game';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { addIcons } from 'ionicons';
import { close, saveSharp } from 'ionicons/icons';

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

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
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
        this.router.navigate(['/list/games/info', this.gameId]).then(() => {
          window.location.reload();
        });
      },
      error: (err) => {
        console.error('error: ', err)
      }
    });
  }
}