import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButtons, IonMenu, IonMenuButton, IonList, IonListHeader, IonIcon } from '@ionic/angular/standalone';
import { DeviceService } from 'src/app/core/services/device.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MenuPage } from 'src/app/core/models/menu-page';
import { addIcons } from 'ionicons';
import { gameController, gameControllerSharp, pricetag, home, listSharp, person, settingsSharp, informationCircle } from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonItem, IonLabel, RouterLink, IonButtons, IonMenu, IonMenuButton, IonList, IonListHeader, IonIcon]
})
export class AboutPage implements OnInit {
  /* Device's Model */
  public deviceModel$: string = 'undefined';

  /* Device's UUID */
  public deviceUUID$: string = 'undefined';

  /* Device's OS */
  public deviceOS$: string = 'undefined';

  /**
   * Constructor
   * @param deviceService   Device Service.
   */
  constructor(
    private deviceService: DeviceService
  ) {
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

  ngOnInit() {
    this._getDeviceData();
  }

  ionViewWillEnter() {
    this._getDeviceData();
  }

  /**
   * Get the Device's information
   * @returns void.
   */
  private _getDeviceData(): void {
    this.deviceModel$ = this.deviceService.deviceModel();
    this.deviceUUID$ = this.deviceService.deviceUUID();
    this.deviceOS$ = this.deviceService.deviceOSVersion();
  }
}