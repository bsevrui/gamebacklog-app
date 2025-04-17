import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { LocalizationService } from './core/services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  /**
   * Constructor
   * @param platform platform     Platform.
   */
  constructor(
    private platform: Platform,
    private localizationService: LocalizationService
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.localizationService.initializeLocalization();
    this.platform.ready().then(async () => {
      await SplashScreen.hide();
    });
  }
}