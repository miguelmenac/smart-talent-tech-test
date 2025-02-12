import { Component } from '@angular/core';
import { ComponentImports } from './imports.manage';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../../../Core/models/hotel';

@Component({
  selector: 'app-manage',
  imports: ComponentImports,
  providers: [HotelsService],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  hotels: Hotel[] = [];
  showModal = false;
  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelsService.getAllHotels()
      .subscribe({
        next: (hotels) => this.hotels = hotels,
      })
  }
}
