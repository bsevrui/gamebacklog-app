import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonSearchbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Genre } from 'src/app/core/interfaces/genre';
import { ApiService } from 'src/app/core/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, RouterLink, IonSearchbar]
})
export class GenresPage implements OnInit {
  /* Flag for the genres' array */
  private genres: Genre[] = [];
  /* Flag for search query */
  public searchQuery: string = "";
  /* Flag for filtered genres */
  public filteredGenres: Genre[] = [];

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
        this.filteredGenres = data;
      }
    );
  }

  filterGenres() {
    this.filteredGenres = this.genres.filter((genre => genre.name.toLowerCase().includes(this.searchQuery.toLowerCase())));
  }
}