import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HousingLocation } from 'src/app/@types/housing-location';

@Component({
  standalone: true,
  selector: 'app-housing-listing',
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let location of locationList">
      <button
        (click)="onSelectLocation(location)"
        class="flex flex-col gap-1 mb-8 hover:cursor-pointer"
      >
        <img
          class="rounded"
          [src]="location.photo"
          alt="Picture of {{ location.name }}"
          loading="lazy"
        />
        <p class="font-semibold hover:underline">
          {{ location.name }}
        </p>
        <p>
          {{ location.city }} <span>{{ location.state }}</span>
        </p>
      </button>
    </ng-container>
  `,
})
export class HousingListingComponent {
  @Input() locationList!: HousingLocation[];
  @Output() selectLocation = new EventEmitter<HousingLocation>();

  onSelectLocation(location: HousingLocation) {
    this.selectLocation.emit(location);
  }
}
