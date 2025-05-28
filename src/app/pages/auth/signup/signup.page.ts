import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonMenuButton, IonButtons, IonInput, IonItem, IonButton]
})
export class SignupPage implements OnInit {
  public email?: string;
  public username?: string;
  public password?: string;
  public repeatPassword?: string;
  public birthdate?: string;
  public firstName?: string;
  public lastName?: string;

  constructor(private authService: AuthService) {}

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
        },
        (error) => {
          console.log('signup error', error);
        }
      );
    }
  }
}