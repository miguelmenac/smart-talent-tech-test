import { Component, Input } from '@angular/core';
import imports from './imports.hotel';
import { Hotel } from '../../../Core/models/hotel';

@Component({
  selector: 'app-hotel',
  imports: [imports],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss',
})
export class HotelComponent {
  @Input() hotel!: Hotel;
}
