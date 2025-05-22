import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Game } from 'src/app/core/interfaces/game';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.page.html',
  styleUrls: ['./game-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, TranslateModule]
})
export class GameInfoPage implements OnInit {
  private gameId: number = 0;
  public game?: Game;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const ID = this.activatedRoute.snapshot.paramMap.get('id');
    if (ID != null) {
      this.gameId = parseInt(ID);
    }
    this.loadData();
  }

  loadData() {
    this.apiService.getGame(this.gameId).subscribe(
      (data) => {
        console.log(data);
        this.game = data;
      }
    );
  }
}