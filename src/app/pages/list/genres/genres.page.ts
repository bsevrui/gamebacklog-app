import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, InfiniteScrollCustomEvent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Genre } from 'src/app/core/interfaces/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButtons, IonMenuButton, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList, IonLabel]
})
export class GenresPage implements OnInit {
  
  /* Flag for the genres' array */
  genres?: Genre[];
  /* Flag for the limit of generes load on each interaction */
  limit: number = 15;
  /* Flag for the start of the array */
  start: number = 0;

  /**
   * Constructor.
   * @param accessProvider accessProvider   Access Provider.
   */
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.start = 0;
    this.genres = [];
  }
}