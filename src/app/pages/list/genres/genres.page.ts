import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButtons, IonMenuButton]
})
export class GenresPage implements OnInit {
  /* Flag for the limit of generes load on each interaction */
  limit: number = 15;
  /* Flag for the start of the array */
  start: number = 0;

  constructor() { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.start = 0;
  }

}