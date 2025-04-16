import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  /**
   * Constructor.
   * @param translateService    Translate Service.
   */
  constructor(
    private translateService: TranslateService
  ) {
    console.log("Localization Service's Constructor ...");
  }

  /**
   * Initialize App Localization.
   * @returns void.
   */
  public initializeLocalization(): void {
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang) {
      if (browserLang === 'en') {
        this.translateService.use('en');
      } else if (browserLang === 'es') {
        this.translateService.use('es');
      } else if (browserLang === 'zh') {
        const browserCultureLang = this.translateService.getBrowserCultureLang();
        if (browserCultureLang?.match(/-CN|CHS|HANS/i)) {
          this.translateService.use('zh-cmn-Hans');
        } else if (browserCultureLang?.match(/-TW|CHT|Hant/i)) {
          this.translateService.use('zh-cmn-Hant');
        }
      } else {
        this.translateService.use('en');
      }
    } else {
      this.translateService.use('en');
    }
  }


  /**
   * Translate.
   * @param key Keys.
   * @returns Localization.
   */
  public translate(key: string | Array<string>): Observable<string | any> {
    return this.translateService.get(key);
  }

  /**
   * Get Language
   * @returns Language
   */
  public getLang() {
    return this.translateService.getBrowserLang();
  }
}