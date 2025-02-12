import { inject, Injectable } from '@angular/core';
import { FirebaseService, IWhere } from '../../../Core/services/firebase.service';
import { HotelsInterface } from './hotels.service.interface';
import { Observable } from 'rxjs';
import { Hotel } from '../../../Core/models/hotel';

const HOTELS_COLLECTION = 'hotels';

@Injectable({ providedIn: 'root' })
export class HotelsService implements HotelsInterface {
  constructor(private fiebaseService: FirebaseService) { }

  getAllHotels() {
    return this.fiebaseService.getDocuments(HOTELS_COLLECTION) as Observable<Hotel[]>;
  }

  getlHotelsByLocation(location: string) {
    const filter: IWhere[] = [
      {
        fieldPath: 'location',
        opStr: '==',
        value: location
      }
    ]
    return this.fiebaseService.getDocumentsByCondition(filter, HOTELS_COLLECTION) as Observable<Hotel[]>;
  }
}
