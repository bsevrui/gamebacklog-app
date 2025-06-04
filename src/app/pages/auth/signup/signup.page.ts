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

  signup() {
    if (this.password == this.repeatPassword) {
      const userData = {
        email: this.email,
        username: this.username,
        password: this.password,
        birthdate: this.birthdate,
        firstName: this.firstName,
        lastName: this.lastName
      };

      this.authService.signup(userData).subscribe(
        (response) => {
          console.log('successful signup', response);
          const credentials = {
            email: this.email,
            password: this.password
          };
          this.authService.login(credentials).subscribe(
            async (response) => {
              console.log(response.accessToken);
              console.log(response.user);
              await this.storageService.setUserData(response.accessToken, response.user);
              this.router.navigate(['/tabs/userGames']);
            }
          );
        },
        (error) => {
          console.log('signup error', error);
        }
      );
    }
  }
}