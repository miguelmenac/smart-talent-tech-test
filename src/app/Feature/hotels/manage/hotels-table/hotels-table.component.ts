import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentImports } from './hotels-table-imports';
import { Hotel } from '../../../../Core/models/hotel';

@Component({
  selector: 'app-hotels-table',
  imports: ComponentImports,
  templateUrl: './hotels-table.component.html',
  styleUrl: './hotels-table.component.scss'
})
export class HotelsTableComponent {
  @Input() hotels: Hotel[] = [];
  @Output() editHotel: EventEmitter<Hotel> = new EventEmitter();
  loading: boolean = true;

  edit(hotel: Hotel) {
    this.editHotel.emit(hotel);
  }
}
