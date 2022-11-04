import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HousingLocation } from '../@types/housing-location';
import { HOUSES } from '../utils/housing-list-mock';

@Injectable({
  providedIn: 'root',
})
export class HousingListService {
  getLocations(): Observable<HousingLocation[]> {
    return of(HOUSES);
  }
}
