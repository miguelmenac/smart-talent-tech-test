import { Component, Input } from '@angular/core';
import { HotelComponent } from "../hotel/hotel.component";
import { Hotel } from '../../../Core/models/hotel';

@Component({
  selector: 'app-hotels-list',
  imports: [HotelComponent],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.scss'
})
export class HotelsListComponent {
  @Input() hotels: Hotel[] = [];
}
