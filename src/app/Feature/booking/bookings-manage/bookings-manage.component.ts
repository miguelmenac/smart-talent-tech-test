import { Component, inject, OnInit } from '@angular/core';
import { ComponentImports } from './bookingss.manage.imports';
import { BookingService } from '../booking-search/services/booking.service';
import { BookingFull } from '../../../Core/models/booking';

@Component({
  selector: 'app-bookings-manage',
  imports: ComponentImports,
  templateUrl: './bookings-manage.component.html',
  styleUrl: './bookings-manage.component.scss'
})
export class BookingsManageComponent implements OnInit {
  bookingService = inject(BookingService);
  bookings: BookingFull[] = [];

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.bookingService.getBookings().subscribe({
      next: (bookings) => this.bookings = bookings
    })
  }
}
