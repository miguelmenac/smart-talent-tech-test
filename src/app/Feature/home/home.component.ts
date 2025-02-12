import { Component, OnInit } from '@angular/core';
import { HotelsListComponent } from '../hotels/hotels-list/hotels-list.component';
import { HotelsService } from '../hotels/services/hotels.service';
import { FirebaseService } from '../../Core/services/firebase.service';
import { Hotel } from '../../Core/models/hotel';


@Component({
  selector: 'app-home',
  imports: [HotelsListComponent],
  providers: [HotelsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  hotels: Hotel[] = [];
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getAllHotels().subscribe(({
      next: (hotels) => this.hotels = hotels,
      error: (err) => {
        console.log('err', err);
      },
    }))
  }
}
