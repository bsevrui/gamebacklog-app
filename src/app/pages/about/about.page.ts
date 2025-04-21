import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/angular/standalone';
import { DeviceService } from 'src/app/core/services/device.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonItem, IonLabel, RouterLink]
})
export class AboutPage implements OnInit {
  /* Device's Model */
  public deviceModel$: string = 'undefined';

  /* Device's UUID */
  public deviceUUID$: string = 'undefined';

  /* Device's OS */
  public deviceOS$: string = 'undefined';

  /**
   * Constructor
   * @param deviceService   Device Service.
   */
  constructor(
    private deviceService: DeviceService
  ) {}

  ngOnInit() {
    this._getDeviceData();
  }

  ionViewWillEnter() {
    this._getDeviceData();
  }

  /**
   * Get the Device's information
   * @returns void.
   */
  private _getDeviceData(): void {
    this.deviceModel$ = this.deviceService.deviceModel();
    this.deviceUUID$ = this.deviceService.deviceUUID();
    this.deviceOS$ = this.deviceService.deviceOSVersion();
  }
}