import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { LocalizationService } from './core/services/localization.service';
import { DeviceService } from './core/services/device.service';

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
   * @param deviceService         Device Service.
   */
  constructor(
    private platform: Platform,
    private localizationService: LocalizationService,
    private deviceService: DeviceService
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.localizationService.initializeLocalization();
    this.deviceService.initializeDevice();
    this.platform.ready().then(async () => {
      await SplashScreen.hide();
    });
  }
}