import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.platform.ready().then(async () => {
      await SplashScreen.hide();
    });
  }
}