import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonList, IonItem, IonInput, IonButtons, IonMenuButton, IonButton, RouterLink]
})
export class LoginPage implements OnInit {
  public email?: string;
  public password?: string;

  /**
   * Constructor
   * @param authService Auth Service.
   * @param storageService Storage Service.
   * @param router Router.
   */
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(userData).subscribe(
      async (response) => {
        console.log(response.accessToken);
        console.log(response.user);
        await this.storageService.setUserData(response.accessToken, response.user);
        this.router.navigate(['/tabs/userGames']);
      }
    );
  }
}