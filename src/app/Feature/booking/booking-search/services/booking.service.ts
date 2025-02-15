import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Booking, BookingFull } from '../../../../Core/models/booking';
import { FirebaseService } from '../../../../Core/services/firebase.service';
import { DocumentReference } from 'firebase/firestore';
import { EmailService } from '../../../../Core/services/email.service';

const COLLECTION_NAME = 'bookings';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private currentBooking = new BehaviorSubject<any>(null);
  firebaseService = inject(FirebaseService);
  emailService = inject(EmailService);

  searchHotels(booking: Booking): void {
    this.currentBooking.next(booking);
  }

  get getBookingSearch(): Observable<Booking> {
    return this.currentBooking.asObservable();
  }

  async createBooking(booking: BookingFull): Promise<DocumentReference> {
    const subject = 'Reserva confirmada';
    const to = booking.travelers[0].email;
    const body = `Su reserva en el hotel ${booking.hotelName} ha sido confirmada, desde: ${booking.initialDate} hasta: ${booking.endDate}`;
    this.emailService.sendEmail({ subject, to, body });
    return await this.firebaseService.createDocument(COLLECTION_NAME, booking);
  }

  getBookings(): Observable<BookingFull[]> {
    return this.firebaseService.getDocuments(COLLECTION_NAME).pipe(
      map((bookings: any[]) => bookings.map(booking => ({
        ...booking,
        initialDate: booking.initialDate.toDate(),
        endDate: booking.endDate.toDate()
      })))
    ) as Observable<BookingFull[]>;
  }



}
