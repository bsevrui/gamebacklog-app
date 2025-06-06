import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonRouterLink, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { LocalizationService } from './core/services/localization.service';
import { DeviceService } from './core/services/device.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { gameController, gameControllerSharp, pricetag, home, listSharp, person, settingsSharp, informationCircle, peopleSharp, logIn, logInOutline } from 'ionicons/icons';
import { MenuPage } from './core/interfaces/menu-page';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterLink, RouterLinkActive, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonRouterLink, IonHeader, IonToolbar, IonTitle, TranslateModule, CommonModule],
})
export class AppComponent {
  /**
   * Constructor
   * @param platform              Platform.
   * @param localizationService   Localization Service.
   * @param deviceService         Device Service.
   */
  constructor(
    private platform: Platform,
    private localizationService: LocalizationService,
    private deviceService: DeviceService
  ) {
    addIcons({gameController, gameControllerSharp, pricetag, home, listSharp, person, settingsSharp, informationCircle, peopleSharp, logIn, logInOutline});
    this.initializeApp();
  }

  /* Pages on 1st block 'Pages' */
  pagesPages: MenuPage[] = [
    { title: 'PAGE_GAMES', icon: 'game-controller', path: '/list/games' },
    { title: 'PAGE_PLATFORMS', icon: 'game-controller-sharp', path: '/list/platforms' },
    { title: 'PAGE_GENRES', icon: 'pricetag', path: '/list/genres' }
  ];

  /* Pages on 2nd block 'Tabs' */
  tabsPages: MenuPage[] = [
    { title: 'TAB_HOME', icon: 'home', path: '/tabs/home' },
    { title: 'TAB_USER_GAMES', icon: 'list-sharp', path: '/tabs/userGames' },
    { title: 'TAB_PROFILE', icon: 'person', path: '/tabs/profile' }
  ];

  /* Pages on 3rd block 'App' */
  appPages: MenuPage[] = [
    { title: 'PAGE_ABOUT', icon: 'information-circle', path: '/about' }
  ];

  public initializeApp() {
    this.localizationService.initializeLocalization();
    this.deviceService.initializeDevice();
    this.platform.ready().then(async () => {
      await SplashScreen.hide();
    });
  }
}