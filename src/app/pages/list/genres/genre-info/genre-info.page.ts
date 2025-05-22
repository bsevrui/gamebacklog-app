import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Genre } from 'src/app/core/interfaces/genre';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genre-info',
  templateUrl: './genre-info.page.html',
  styleUrls: ['./genre-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, RouterLink]
})
export class GenreInfoPage implements OnInit {
  private genreId: number = 0;
  public genre?: Genre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const ID = this.activatedRoute.snapshot.paramMap.get('id');
    if (ID != null) {
      this.genreId = parseInt(ID);
      this.loadData();
    }
  }

  loadData() {
    this.apiService.getGenre(this.genreId).subscribe(
      (data) => {
        console.log(data);
        this.genre = data;
      }
    );
  }
}