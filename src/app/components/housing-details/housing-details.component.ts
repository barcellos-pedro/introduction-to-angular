import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from 'src/app/@types/housing-location';

@Component({
  standalone: true,
  selector: 'app-housing-details',
  imports: [CommonModule],
  template: `
    <img
      class="rounded"
      [src]="house.photo"
      alt="Picture of {{ house.name }} "
    />
    <h1>{{ house.name }}</h1>
    <p>
      {{ house.city }}, <span>{{ house.state }}</span>
    </p>
    <p>Available units> {{ house.availableUnits }}</p>
    <p>{{ hasLaundry }}</p>
    <p>{{ hasWifi }}</p>
  `,
})
export class HousingDetailsComponent {
  @Input() house!: HousingLocation;

  get hasLaundry() {
    return this.house.laundry ? 'Has laundry' : 'Does not have laundry';
  }

  get hasWifi() {
    return this.house.wifi ? 'Has wi-fi' : 'Does not have wi-fi';
  }
}
