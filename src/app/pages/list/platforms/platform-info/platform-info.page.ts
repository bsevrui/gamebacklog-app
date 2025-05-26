import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Platform } from 'src/app/core/interfaces/platform';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-platform-info',
  templateUrl: './platform-info.page.html',
  styleUrls: ['./platform-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonThumbnail, RouterLink]
})
export class PlatformInfoPage implements OnInit {
  private platformId: number = 0;
  public platform?: Platform;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const ID = this.activatedRoute.snapshot.paramMap.get('id');
    if (ID != null) {
      this.platformId = parseInt(ID);
      this.loadData();
    }
  }

  loadData() {
    this.apiService.getPlatform(this.platformId).subscribe(
      (data) => {
        this.platform = data;
        console.log(this.platform);
      }
    );
  }
}