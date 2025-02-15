import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../../../Core/models/hotel';
import { ComponentImports } from './hotel-detail.imports';
import { BookingService } from '../../booking/booking-search/services/booking.service';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../Shared/Services/toast.service';


@Component({
  selector: 'app-hotel-detail',
  imports: ComponentImports,
  providers: [MessageService, ToastService],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  hotelsService = inject(HotelsService);
  idHotel: string | undefined;
  hotel!: Hotel;
  defaultImage = 'https://firebasestorage.googleapis.com/v0/b/test-project-6366a.firebasestorage.app/o/no-image.jpg?alt=media&token=c72a7fa0-7fd5-44c0-a948-4f83e5861939';
  bookingService = inject(BookingService);
  totalDays: number = 0;
  showModal: boolean = false;
  idRoom: string | undefined;
  toastService = inject(ToastService);
  constructor() {
    this.route.params.subscribe(params => {
      this.idHotel = params['id'];
    });
  }

  ngOnInit(): void {
    this.getHotel();
  }

  async getHotel(): Promise<void> {
    if (this.idHotel) {
      const hotel = await this.hotelsService.getHotelById(this.idHotel);
      this.hotel = hotel;
      this.calculateTotal();
    }

  }

  selectRoom(idRoom: string): void {
    this.idRoom = idRoom;
    this.showModal = true;
  }

  calculateTotal(): void {
    this.bookingService.getBookingSearch
      .subscribe((booking) => {
        const dif = booking.endDate.getTime() - booking.initialDate.getTime();
        const daysDiff = dif / (1000 * 60 * 60 * 24);
        this.totalDays = daysDiff;
      });
  }

  getTotalPerNigth(value: number) {
    return value * this.totalDays;
  }

  handleClose(succcess: boolean) {
    if (succcess) {
      this.toastService.showSuccess("Reserva creada exitosamente");
    } else {
      this.toastService.showError("Ocurrió un error al crear la reserva");
    }
    this.showModal = false;
  }
}
