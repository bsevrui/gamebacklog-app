import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonList, IonItem, IonInput, IonButtons, IonMenuButton, IonButton]
})
export class LoginPage implements OnInit {
  public signupButtonStatus: boolean = false;
  public email: string = "";
  public password: string = "";

  constructor() {}

  ngOnInit() {}
}