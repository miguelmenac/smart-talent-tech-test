import { Component, Input } from '@angular/core';
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
  loading: boolean = true;
}
