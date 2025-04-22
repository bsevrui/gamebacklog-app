import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, TranslateModule]
})
export class GamesPage implements OnInit {
  /* Flag for the limit of games load on each interaction */
  limit: number = 15;
  /* Flag for the start of the array */
  start: number = 0;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.start = 0;
  }
}