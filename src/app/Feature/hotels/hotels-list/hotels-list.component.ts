import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HotelComponent } from "../hotel/hotel.component";
import { Hotel } from '../../../Core/models/hotel';
import { BookingService } from '../../booking/booking-search/services/booking.service';


@Component({
  selector: 'app-hotels-list',
  imports: [HotelComponent],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.scss',
})
export class HotelsListComponent implements OnInit {
  @Input() hotels: Hotel[] = [];
  copyHotels: Hotel[] = [];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.listenBookings();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hotels'] && changes['hotels'].currentValue) {
      this.copyHotels = [...this.hotels];
    }
  }

  listenBookings(): void {
    this.bookingService.getBookingSearch
      .subscribe((booking) => {
        if(booking) {
          const query = booking.destination.toLocaleLowerCase();
          this.hotels = this.copyHotels.filter((hotel) => hotel.location.toLocaleLowerCase().includes(query));
        }
      });
  }
}
