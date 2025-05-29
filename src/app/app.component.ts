import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSplitPane, IonMenu, IonMenuButton, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { LocalizationService } from './core/services/localization.service';
import { DeviceService } from './core/services/device.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { gameController, gameControllerSharp, pricetag, home, listSharp, person, settingsSharp, informationCircle, people, peopleSharp, logIn, logOut, logInOutline } from 'ionicons/icons';
import { MenuPage } from './core/interfaces/menu-page';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterLink, RouterLinkActive, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonRouterLink, IonHeader, IonToolbar, IonTitle, TranslateModule, CommonModule],
})
export class AppComponent {
  public authenticated?: Promise<boolean>;

  /**
   * Constructor
   * @param platform              Platform.
   * @param localizationService   Localization Service.
   * @param deviceService         Device Service.
   * @param storageService        Storage Service.
   */
  constructor(
    private platform: Platform,
    private localizationService: LocalizationService,
    private deviceService: DeviceService,
    private storageService: StorageService
  ) {
    addIcons({gameController, gameControllerSharp, pricetag, home, listSharp, person, settingsSharp, informationCircle, peopleSharp, logIn, logInOutline});
    this.initializeApp();
    this.authenticated = this.storageService.isAuthenticated();
  }

  /* Pages on 1st Block 'Pages' */
  pagesPages: MenuPage[] = [
    { title: 'PAGE_GAMES', icon: 'game-controller', path: '/list/games' },
    { title: 'PAGE_PLATFORMS', icon: 'game-controller-sharp', path: '/list/platforms' },
    { title: 'PAGE_GENRES', icon: 'pricetag', path: '/list/genres' }
  ];

  /* Pages on 2nd Block 'Auth' */
  authPages: MenuPage[] = [
    { title: 'PAGE_LOGIN', icon: 'log-in', path: '/auth/login' },
    { title: 'PAGE_SIGNUP', icon: 'log-in-outline', path: '/auth/signup' }
  ];

  /* Pages on 3rd Block 'Tabs' */
  tabsPages: MenuPage[] = [
    { title: 'TAB_HOME', icon: 'home', path: '/tabs/home' },
    { title: 'TAB_USER_GAMES', icon: 'list-sharp', path: '/tabs/userGames' },
    { title: 'TAB_PROFILE', icon: 'person', path: '/tabs/profile' }
  ];

  /* Pages on 4th Block 'Admin' */
  adminPages: MenuPage[] = [
    { title: 'PAGE_ADMIN_GAMES', icon: 'game-controller', path: '' },
    { title: 'PAGE_ADMIN_PLATFORMS', icon: 'game-controller-sharp', path: '' },
    { title: 'PAGE_ADMIN_GENRES', icon: 'pricetag', path: '' },
    { title: 'PAGE_ADMIN_USERS', icon: 'people-sharp', path: '' }
  ];

  /* Pages on 5th Block 'App' */
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