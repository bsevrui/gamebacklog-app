import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { Device } from '@capacitor/device';
import { ScreenOrientation } from '@capacitor/screen-orientation';

// Platform Device
export const PLATFORM_DEVICE = {
  android: 1,
  ios: 2,
  pwa: 3
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  /**
   * Constructor
   * @param platform  Platform
   */
  constructor(private platform: Platform) {}

  /**
   * Is Device.
   * @returns If is Device.
   */
  private isDevice(): boolean {
    return this.platform.is('cordova');
  }

  /**
   * Is Android
   * @returns If is Android
   */
  private isAndroid(): boolean {
    return this.platform.is('android');
  }

  /**
   * Is iOS
   * @returns If is iOS
   */
  private isIOS(): boolean {
    return this.platform.is('ios');
  }

  /**
   * Is PWA
   * @returns If is PWA
   */
  private isPWA(): boolean {
    return this.platform.is('pwa');
  }

  /**
   * Platform device.
   * @returns Platform device.
   */
  public platformDevice() {
    if (this.isDevice()) {
      if (this.isAndroid()) {
        return String(PLATFORM_DEVICE.android).toLowerCase();
      } else if (this.isIOS()) {
        return String(PLATFORM_DEVICE.ios).toLowerCase();
      } else {
        return String(PLATFORM_DEVICE.pwa).toLowerCase();
      }
    } else {
      return "PWA/undefined";
    }
  }

  /**
   * Device's OS Version
   * @returns Device's OS Version
   */
  public deviceOSVersion(): string {
    if (this.isDevice()) {
      let OSVersion: string = String(async () => {
        (await Device.getInfo()).osVersion;
      });
      return OSVersion;
    } else {
      return "PWA";
    }
  }

  /**
   * Device's Model
   * @returns Device's Model
   */
  public deviceModel(): string {
    if (this.isDevice()) {
      let model: string = String(async () => {
        (await Device.getInfo()).model;
      });
      return model;
    } else {
      return "PWA";
    }
  }

  /**
   * Device's Universal Unique Identifier
   * @returns Device's UUID
   */
  public deviceUUID(): string {
    if (this.isDevice()) {
      const DEVICE_UUID: string = String(async () => {
        await Device.getId();
      });
      return DEVICE_UUID;
    } else {
      return "";
    }
  }

  /**
   * Initialize device.
   * @returns promise.
   */
  public initializeDevice(): Promise<any> {
    let promise = new Promise<void>((resolve, reject) => {
      this.platform.ready().then(async () => {
        if (this.isDevice()) {
          if (this.isAndroid()) {
            StatusBar.setOverlaysWebView({ overlay: false });
          } else if (this.isIOS()) {
            window.addEventListener('statusTap', function () {
              console.log('statusbar tapped');
            })
            StatusBar.setOverlaysWebView({ overlay: true });
          } else if (this.isPWA()) {
            await SplashScreen.hide();
            await ScreenOrientation.lock({ orientation: 'portrait' });
          }
        }
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
    return promise;
  }
}