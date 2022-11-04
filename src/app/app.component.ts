import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HousingLocation } from './@types/housing-location';
import { HeaderComponent } from './components/header/header.component';
import { HousingDetailsComponent } from './components/housing-details/housing-details.component';
import { HousingListingComponent } from './components/housing-listing/housing-listing.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { HousingListService } from './services/housing-list.service';
import { filterByName } from './utils/location-filter';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    SearchbarComponent,
    HousingListingComponent,
    HousingDetailsComponent,
  ],
  template: ` <main>
    <app-header></app-header>

    <div class="flex justify-center py-5 sm:justify-start sm:pl-8">
      <app-searchbar (search)="onSearchLocations($event)"></app-searchbar>
    </div>

    <div
      *ngIf="locations$ | async as locations"
      class="px-8 my-8 grid grid-cols-1 gap-10 sm:grid-cols-2"
    >
      <app-housing-listing
        [locationList]="locations"
        (selectLocation)="onSelectLocation($event)"
      >
      </app-housing-listing>

      <hr class="mb-8 bg-zinc-300 sm:hidden" />

      <aside *ngIf="selectedHouse$ | async as selectedHouse">
        <app-housing-details [house]="selectedHouse"></app-housing-details>
      </aside>
    </div>
  </main>`,
})
export class AppComponent implements OnInit {
  locations$!: Observable<HousingLocation[]>;
  selectedHouse$?: Observable<HousingLocation | undefined>;

  constructor(private housingListService: HousingListService) {}

  ngOnInit(): void {
    this.locations$ = this.housingListService.getLocations();
  }

  onSelectLocation(location: HousingLocation) {
    this.selectedHouse$ = this.locations$.pipe(
      map((locations) => locations.find(({ name }) => name === location.name))
    );
  }

  onSearchLocations(searchText: string) {
    this.locations$ = this.housingListService.getLocations().pipe(
      map((locations) => {
        if (!searchText) return locations;
        return locations.filter(filterByName(searchText));
      })
    );
  }
}
