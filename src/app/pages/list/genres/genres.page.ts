import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonRouterLink } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Genre } from 'src/app/core/interfaces/genre';
import { ApiService } from 'src/app/core/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonRouterLink, RouterLink]
})
export class GenresPage implements OnInit {
  
  /* Flag for the genres' array */
  genres: Genre[] = [];

  /**
   * Constructor
   * @param apiService    API Service
   */
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  /**
   * Loads genres from db
   */
  loadData() {
    this.apiService.getGenres().subscribe(
      (data) => {
        this.genres = data;
      }
    );
  }
}