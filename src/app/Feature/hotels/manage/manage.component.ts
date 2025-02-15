import { Component } from '@angular/core';
import { ComponentImports } from './imports.manage';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../../../Core/models/hotel';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../Shared/Services/toast.service';

@Component({
  selector: 'app-manage',
  imports: ComponentImports,
  providers: [HotelsService, MessageService, ToastService],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  hotels: Hotel[] = [];
  showModal = false;
  selectedHotel!: Hotel;
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

  edit(hotel: Hotel) {
    this.showModal = true;
    this.selectedHotel = hotel;
  }
}
