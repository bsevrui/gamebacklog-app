import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonThumbnail, IonSearchbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Platform } from 'src/app/core/interfaces/platform';
import { ApiService } from 'src/app/core/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.page.html',
  styleUrls: ['./platforms.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, TranslateModule, IonList, IonLabel, IonItem, IonThumbnail, RouterLink, IonSearchbar]
})
export class PlatformsPage implements OnInit {
  /* Flag for the platforms' array */
  private platforms: Platform[] = [];
  /* Flag for search query */
  public searchQuery: string = "";
  /* Flag for filtered platforms */
  public filteredPlatforms: Platform[] = [];

  /**
   * Constructor
   * @param apiService    API Service
   */
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  /**
   * Loads platforms from db
   */
  loadData() {
    this.apiService.getPlatforms().subscribe(
      (data) => {
        this.platforms = data;
        this.filteredPlatforms = data;
      }
    );
  }

  filterPlatforms() {
    this.filteredPlatforms = this.platforms.filter((platform => platform.name.toLowerCase().includes(this.searchQuery.toLocaleLowerCase())));
  }
}