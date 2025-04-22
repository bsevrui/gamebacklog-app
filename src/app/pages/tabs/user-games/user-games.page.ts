import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-usergames',
  templateUrl: 'user-games.page.html',
  styleUrls: ['user-games.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule, IonButtons, IonMenuButton],
})
export class UserGamesPage {
  constructor() {}
}