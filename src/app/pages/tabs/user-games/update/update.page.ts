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
    this.loadData();
  }

  loadData() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    console.log('userId: ', userId);
    const gamedId = this.activatedRoute.snapshot.paramMap.get('gameId');
    console.log('gameId: ', gamedId);
    if (userId) {
      this.apiService.getUser(parseInt(userId)).subscribe(
        (data) => {
          console.log(data.games);
          if (gamedId) {
            this.usergame = data.games?.find(usergame => usergame.gameId == parseInt(gamedId));
            console.log(this.usergame);
          }
        }
      );
    }
  }

  update() {
    console.log(this.status);
    console.log(this.score);
    console.log(this.installed);
    console.log(this.platinum);
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
}