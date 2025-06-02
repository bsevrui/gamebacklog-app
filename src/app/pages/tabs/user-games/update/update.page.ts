import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersGames } from 'src/app/core/interfaces/usersgames';
import { addIcons } from 'ionicons';
import { saveSharp, close } from 'ionicons/icons';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, IonSelect, IonSelectOption, TranslateModule, IonButton, IonIcon, RouterLink]
})
export class UpdatePage implements OnInit {
  private userId?: string | null;
  private gameId?: string | null;
  public usergame?: UsersGames;
  public status?: string;
  public score?: number;
  public installed?: boolean;
  public platinum?: boolean;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {
    addIcons({ saveSharp, close });
  }

  async ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.gameId = this.activatedRoute.snapshot.paramMap.get('gameId');
    this.loadData();
  }

  loadData() {
    if (this.userId) {
      this.apiService.getUser(parseInt(this.userId)).subscribe(
        (data) => {
          console.log(data.games);
          if (this.gameId) {
            this.usergame = data.games?.find(usergame => usergame.gameId == Number(this.gameId));
            console.log(this.usergame);
          }
        }
      );
    }
  }

  /* ejemplo
  update() {
    this.apiService.updateUserGame(1, 42, {
      status: 'Completed',
      score: 5,
      installed: true,
      platinum: true,
    }).subscribe({
      next: (res) => console.log('updated: ', res),
      error: (err) => console.error('error: ', err)
    });
  }
  */

  update() {}
}