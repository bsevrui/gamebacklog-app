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
  constructor(
    private platform: Platform,
  ) {}

  /**
   * Is Device.
   * @returns If is Device.
   */
  private _isDevice(): boolean {
    return this.platform.is('cordova');
  }
  public isDevice(): boolean {
    return this._isDevice();
  }

  /**
   * Is Android
   * @returns If is Android
   */
  private _isAndroid(): boolean {
    return this.platform.is('android');
  }
  public isAndroid(): boolean {
    return this._isAndroid();
  }

  /**
   * Is iOS
   * @returns If is iOS
   */
  private _isIOS(): boolean {
    return this.platform.is('ios');
  }
  public isIOS(): boolean {
    return this._isIOS();
  }

  /**
   * Is PWA
   * @returns If is PWA
   */
  private _isPWA(): boolean {
    return this.platform.is('pwa');
  }
  public isPWA(): boolean {
    return this._isPWA();
  }

  /**
   * Platform device.
   * @returns Platform device.
   */
  public platformDevice() {
    if (this._isDevice()) {
      if (this._isAndroid()) {
        return String(PLATFORM_DEVICE.android).toLowerCase();
      } else if (this._isIOS()) {
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
    if (this._isDevice()) {
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
    if (this._isDevice()) {
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
    if (this._isDevice()) {
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
        if (this._isDevice()) {
          if (this._isAndroid()) {
            StatusBar.setOverlaysWebView({ overlay: false });
          } else if (this._isIOS()) {
            window.addEventListener('statusTap', function () {
              console.log('statusbar tapped');
            })
            StatusBar.setOverlaysWebView({ overlay: true });
          } else if (this._isPWA()) {
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