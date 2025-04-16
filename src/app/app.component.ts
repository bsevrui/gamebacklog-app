import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { LocalizationService } from './core/services/localization.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  /**
   * Constructor
   * @param platform platform     Platform.
   * @param localizationService   Localization Service.
   */
  constructor(
    private platform: Platform,
    private localizationService: LocalizationService,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.platform.ready().then(async () => {
      await SplashScreen.hide();
      this.localizationService.initializeLocalization();
    });

    this.storage.get('initial_key').then((res => {
      if (res == null) {
        //
      } else {
        //
      }
    }));
  }
}