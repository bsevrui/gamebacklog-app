import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonList, IonItem, IonAvatar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule, IonButtons, IonMenuButton, IonButton, IonList, IonItem, IonAvatar],
})
export class ProfilePage {
  /**
   * Constructor
   * @param storageService Storage Service.
   * @param router Router.
   */
  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  async logOut() {
    await this.storageService.clearUserData();
    this.router.navigate(['/auth/login']);
  }
}