import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonButtons, IonMenu, IonMenuButton, IonList, IonListHeader, IonItem, IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { MenuPage } from 'src/app/core/models/menu-page';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { gameController, gameControllerSharp, pricetag, home, listSharp, person, settingsSharp, informationCircle } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, TranslateModule, IonButtons, IonMenu, IonMenuButton, IonList, IonListHeader, IonItem, CommonModule, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({gameController, gameControllerSharp, pricetag,home, listSharp, person, settingsSharp, informationCircle});
  }

  /* Pages on 1st Block 'Pages' */
  pagesPages: MenuPage[] = [
    { title: 'PAGE_GAMES', name: '', icon: 'game-controller', path: ''},
    { title: 'PAGE_PLATFORMS', name: '', icon: 'game-controller-sharp', path: ''},
    { title: 'PAGE_GENRES', name: '', icon: 'pricetag', path: ''}
  ];

  /* Pages on 2nd Block 'Tabs' */
  tabsPages: MenuPage[] = [
    { title: 'TAB_HOME', name: '', icon: 'home', path: '' },
    { title: 'TAB_USER_GAMES', name: '', icon: 'list-sharp', path: '' },
    { title: 'TAB_PROFILE', name: '', icon: 'person', path: '' }
  ];


  /* Pages on 3rd Block 'App' */
  appPages: MenuPage[] = [
    { title: 'PAGE_SETTINGS', name: '', icon: 'settings-sharp', path: '' },
    { title: 'PAGE_ABOUT', name: '', icon: 'information-circle', path: '' }
  ];
}