import { Injectable } from '@angular/core';
import { FirebaseService, IWhere } from '../../../Core/services/firebase.service';
import { HotelsInterface } from './hotels.service.interface';
import { Observable } from 'rxjs';
import { Hotel } from '../../../Core/models/hotel';
import { DocumentData, DocumentReference } from 'firebase/firestore';

const HOTELS_COLLECTION = 'hotels';

@Injectable({ providedIn: 'root' })
export class HotelsService implements HotelsInterface {
  constructor(private firebaseService: FirebaseService) { }

  getAllHotels() {
    return this.firebaseService.getDocuments(HOTELS_COLLECTION) as Observable<Hotel[]>;
  }

  getHotelById(id: string): Promise<Hotel> {
    return this.firebaseService.getDocument(HOTELS_COLLECTION, id) as Promise<Hotel>;
  }

  getlHotelsByLocation(location: string): Observable<Hotel[]> {
    const filter: IWhere[] = [
      {
        fieldPath: 'location',
        opStr: '==',
        value: location
      }
    ]
    return this.firebaseService.getDocumentsByCondition(filter, HOTELS_COLLECTION) as Observable<Hotel[]>;
  }

  async createHotel(hotel: Hotel): Promise<DocumentReference> {
    return await this.firebaseService.createDocument(HOTELS_COLLECTION, hotel);
  }

  async editHotel(hotel: Hotel, id: string): Promise<void> {
    return await this.firebaseService.updateDocument(HOTELS_COLLECTION, hotel, id);
  }
}
