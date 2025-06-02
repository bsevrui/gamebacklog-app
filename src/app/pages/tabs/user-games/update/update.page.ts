import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UpdatePage implements OnInit {
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    console.log('userId: ', userId);
    const gamedId = this.activatedRoute.snapshot.paramMap.get('gameId');
    console.log('gameId: ', gamedId);
  }

  /* ejemplo
  update() {
    this.apiService.updateUserGame(1, 42, {
      status: 'Completed',
      score: 5,
      installed: true,
      platinum: true,
    }).subscribe({
      next: (res) => console.log('updated: ', res),
      error: (err) => console.error('error: ', err)
    });
  }
    */
}