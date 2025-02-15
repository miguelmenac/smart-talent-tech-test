import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Booking, BookingFull } from '../../../../Core/models/booking';
import { FirebaseService } from '../../../../Core/services/firebase.service';
import { DocumentReference } from 'firebase/firestore';

const COLLECTION_NAME = 'bookings';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private currentBooking = new BehaviorSubject<any>(null);
  constructor(private firebaseService: FirebaseService) { }

  searchHotels(booking: Booking): void {
    this.currentBooking.next(booking);
  }

  get getBookingSearch(): Observable<Booking> {
    return this.currentBooking.asObservable();
  }

  async createBooking(booking: BookingFull): Promise<DocumentReference> {
    return await this.firebaseService.createDocument(COLLECTION_NAME, booking);
  }
}
