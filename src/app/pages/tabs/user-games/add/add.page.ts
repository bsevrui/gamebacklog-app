import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonList, IonItem, IonSelect, IonSelectOption, IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { UsersGames } from 'src/app/core/interfaces/usersgames';
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
  private userId?: number;
  private gameId?: number;
  public game?: Game;
  public usergame?: UsersGames;
  public status?: 'Playing' | 'Completed' | 'Played' | 'On-Hold' | 'Plan-To-Play' | 'Dropped';
  public score?: number;
  public installed?: boolean;
  public platinum?: boolean;

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
}