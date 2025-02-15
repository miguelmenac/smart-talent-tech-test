import { Component, OnInit } from '@angular/core';
import { HotelsListComponent } from '../hotels/hotels-list/hotels-list.component';
import { HotelsService } from '../hotels/services/hotels.service';
import { Hotel } from '../../Core/models/hotel';
import { BookingSearchComponent } from '../booking/booking-search/booking-search.component';

@Component({
  selector: 'app-home',
  imports: [HotelsListComponent, BookingSearchComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  hotels: Hotel[] = [];
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getAllHotels().subscribe(({
      next: (hotels) => this.hotels = hotels,
    }))
  }
}
