import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { LocalizationService } from 'src/app/core/services/localization.service';
import { ToastController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonMenuButton, IonButtons, IonInput, IonItem, IonButton, RouterLink]
})
export class SignupPage implements OnInit {
  public email?: string;
  public username?: string;
  public password?: string;
  public repeatPassword?: string;
  public birthdate?: string;
  public firstName?: string;
  public lastName?: string;

  /**
   * Constructor
   * @param authService Auth Service.
   * @param storageService Storage Service.
   * @param router Router.
   * @param toastCtrl Toast Controller.
   * @param localizationService Localization Service.
   */
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private toastCtrl: ToastController,
    private localizationService: LocalizationService
  ) {}

  ngOnInit() {}

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color: 'warning'
    });
    await toast.present();
  }

  signup() {
    if (!this.email || !this.username || !this.password || !this.repeatPassword || !this.birthdate) {
      this.localizationService.translate(['WARNING_MANDATORY_FIELDS']).subscribe(async (values) => {
        this.presentToast(values['WARNING_MANDATORY_FIELDS']);
      });
    } else if (this.password != this.repeatPassword) {
      this.localizationService.translate(['WARNING_PASSWORD_MISMATCH']).subscribe(async (values) => {
        this.presentToast(values['WARNING_PASSWORD_MISMATCH']);
      });
    } else {
      const userData = {
        email: this.email,
        username: this.username,
        password: this.password,
        birthdate: this.birthdate,
        firstName: this.firstName,
        lastName: this.lastName
      };

      this.authService.signup(userData).pipe(
        catchError((error) => {
          this.localizationService.translate(['WARNING_GENERIC', 'WARNING_EMAIL_ALREADYEXIST', 'WARNING_USERNAME_ALREADYEXIST']).subscribe(async (values) => {
            let errorMsg = values['WARNING_GENERIC'];
            
            if (error?.error?.message === 'email already in use') {
              errorMsg = values['WARNING_EMAIL_ALREADYEXIST'];
            } else if (error?.error?.message === 'username already in use') {
              errorMsg = values['WARNING_USERNAME_ALREADYEXIST'];
            }

            this.presentToast(errorMsg);
          });
          return of(null);
        })
      ).subscribe((response) => {
        if (response) {
          const credentials = {
            email: this.email,
            password: this.password
          };

          this.authService.login(credentials).subscribe(
            async (loginResponse) => {
              await this.storageService.setUserData(loginResponse.accessToken, loginResponse.user);
              this.router.navigate(['/tabs/userGames']);
            }
          );
        }
      });
    }
  }
}